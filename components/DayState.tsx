import Image from "next/image";

function DayState({ day }: { day: boolean | undefined }) {
  let image: [string, string, number?] = ["/images/gray-mark.svg", "gray mark", 12];

  // Corrigindo as comparações com !== ao invés de =
  if (day === true) {
    image = ["/images/green-mark.svg", "green mark", 24];
  } else if (day === false) {
    image = ["/images/red-mark.svg", "red mark", 24];
  }

  const [src, alt, size] = image;
  return (
    <div className="flex items-center justify-center h-9">
      <Image src={src} width={size} height={size} alt={alt} />
    </div>
  );
}

export default DayState;

