import Image from "next/image";

export default function MyProfilePicture() {
  return (
    <main>
      <section className="w-full mx-auto ">
        <Image
          className="border-4 border-black border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D"
          alt="Profile Picture"
          width={200}
          height={200}
          priority={true}
        />
      </section>
    </main>
  );
}
