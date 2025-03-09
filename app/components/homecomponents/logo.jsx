import Image from "next/image";

export function Logo({ width, height, invert }) {
  return (
    <div className={invert ? "invert" : ""}>
      <Image
        className={invert ? "invert" : ""}
        src="/imagenes/lg.png"
        alt="Logo"
        width={width}
        height={height}
      />
    </div>
  );
}
