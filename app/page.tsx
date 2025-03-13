import Image from "next/image";
import DayState from "@/components/DayState";
import Link from 'next/link';

export default function Home() {
  const habits = {
    "Beber Água": {
      "2025-03-11": false,
      "2025-03-12": true,
      "2025-03-13": true,
    },
    "Estudar Programação": {
      "2025-03-11": true,
      "2025-03-12": false,
      "2025-03-13": true,
    },
  };
  const today = new Date();
  const todayWeekDay = today.getDay();
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  
  const sortedWeekDays = weekDays.slice(todayWeekDay + 1).concat(weekDays.slice(0, todayWeekDay + 1));
  return (
    <main className="container mx-auto p-6">
      {Object.keys(habits).length === 0 ? (
        <h1 className="mt-20 text-4xl font-light text-white text-center">
          Você não tem hábitos cadastrados
        </h1>
      ) : (
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit} className="mb-8 flex-col gap-2">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-light text-white">{habit}</span>
              <button>
                <Image
                  src="/images/trash.svg"
                  width={20}
                  height={20}
                  alt="Ícone de lixeira"
                />
              </button>
            </div>
            <section className="grid grid-cols-7 gap-2 bg-neutral-800 rounded-md p-2">
              {sortedWeekDays.map((day, index) => {
                // Calcular a data baseada no índice
                const date = new Date();
                date.setDate(date.getDate() - (date.getDay() - index)); // Ajusta para a data correta
                const formattedDate = date.toISOString().split('T')[0]; // Formata para "YYYY-MM-DD"
                
                return (
                  <div key={formattedDate} className="flex flex-col items-center font-bold">
                    <span className="text-white text-xs">{day}</span>
                    <DayState day={undefined} />
                  </div>
                );
              })}
       
       
            </section>

          
          </div>
        )))}
          <Link href="/novo-habito"
        className="fixed text-center bottom-10 w-2/3 left-1/2 -translate-x-1/2 text-neutral-900 bg-[#45EDAD] font-display font-regular text-2xl p-2 rounded-md">
          Novo Hábito
        
      </Link>
           
     
    </main>
  );
}
