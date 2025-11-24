import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getNotes() {
  const notes = await prisma.note.findMany();
  return notes;
}

export default async function LatihanPage() {
  const notes = await getNotes();

  return (
    <div style={{ 
      maxWidth: "600px",      
      margin: "50px auto",    
      padding: "20px", 
      fontFamily: "sans-serif",
      color: "white"          
    }}>
      
      <h1 style={{ 
        textAlign: "center",  
        marginBottom: "30px", 
        fontSize: "24px"
      }}>
        Daftar Catatan Makanan
      </h1>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {notes.map((note) => (
          <div key={note.id} style={{ 
            border: "1px solid #444",   
            backgroundColor: "#111",     
            padding: "20px", 
            borderRadius: "12px",       
            boxShadow: "0 4px 6px rgba(0,0,0,0.3)"
          }}>
            <h3 style={{ margin: "0 0 8px 0", fontSize: "18px", color: "#fff" }}>
              {note.title}
            </h3>
            <p style={{ margin: "0", color: "#ccc", fontSize: "14px" }}>
              {note.content}
            </p>
          </div>
        ))}

        {notes.length === 0 && (
            <p style={{ textAlign: "center", color: "#666" }}>Belum ada data catatan.</p>
        )}
      </div>
    </div>
  );
}