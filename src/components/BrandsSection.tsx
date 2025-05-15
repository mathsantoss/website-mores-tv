

const brands = [
  {
    name: "Samsung",
    url: "https://cdn.brandfetch.io/iduaw_nOnR/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    width: 110,
    invert: false,
  },
  {
    name: "LG",
    url: "https://cdn.brandfetch.io/idEI6u48uh/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    width: 60,
    invert: false,
  },
  {
    name: "Sony",
    url: "https://cdn.brandfetch.io/ido0LYg_hc/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    width: 85,
    invert: false,
  },
  {
    name: "Panasonic",
    url: "https://cdn.brandfetch.io/idZc2Ve3u9/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    width: 110,
    invert: false,
  },
  {
    name: "Philips",
    url: "https://cdn.brandfetch.io/idcwReWJpx/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    width: 75,
    invert: false,
  },
  {
    name: "AOC",
    url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Aoc_international_logo.svg",
    width: 70,
    invert: false,
  },
  {
    name: "TCL",
    url: "https://cdn.brandfetch.io/idMbGUGol-/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
    width: 70,
    invert: false,
  },
];

export default function BrandsSection() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col gap-4 items-center mb-4">
        <h3 className="text-xl font-bold text-blue-900">Assistência técnica em todas as marcas</h3>
        <p className="text-gray-600 text-center text-sm max-w-md mx-auto">
          Trabalhamos com TVs de LED, LCD, OLED e QLED nacionais e importadas.
        </p>
      </div>
      {/* Ajuste: garantir tamanho e distribuição das logos */}
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-7 items-center px-2">
        {brands.map((b) => (
          <div key={b.name} className="flex items-center justify-center bg-white rounded shadow-sm p-2 h-[50px] w-[120px]">
            <img
              src={b.url}
              alt={b.name}
              style={{
                maxWidth: b.width,
                maxHeight: 40,
                width: "auto",
                height: "100%",
                objectFit: "contain",
                filter: b.invert ? "invert(1)" : undefined,
              }}
              className="opacity-90 grayscale hover:opacity-100 hover:grayscale-0 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
