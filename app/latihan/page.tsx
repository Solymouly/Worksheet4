import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getNotes() {
  const notes = await prisma.note.findMany();
  return notes;
}

export default async function LatihanPage() {
  const notes = await getNotes();

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Daftar Catatan Makanan</h1>
      
      <div style={{ display: "grid", gap: "10px", marginTop: "20px" }}>
        {notes.map((note) => (
          <div key={note.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}