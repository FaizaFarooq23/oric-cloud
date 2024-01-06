import prisma from "@/lib/prisma";

// pages/api/register.js
export default async function handler(req, res) {
    // Update the personal info of the user

    const { username, name, date_of_birth, designation, department } = req.body;
    try {
        const user = await prisma.faculty.update({
            where: {
                username: username,
            },
            data: {
                name: name,
                date_of_birth: date_of_birth,
                designation: designation,
                department: department,
            },
        });

        return res.status(200).json({ message: 'Faculty Updated' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error updating faculty' });
    }
}
