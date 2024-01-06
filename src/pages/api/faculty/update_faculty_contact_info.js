import prisma from "@/lib/prisma";

// pages/api/register.js
export default async function handler(req, res) {
    // Update the contact info of the user

    const { username, email, contact_number, address } = req.body;

    try {
        const user = await prisma.faculty.update({
            where: {
                username: username,
            },
            data: {
                email: email,
                contact_number: contact_number,
                address: address,
            },
        });

        return res.status(200).json({ message: 'Faculty Updated' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error updating faculty' });
    }
}
