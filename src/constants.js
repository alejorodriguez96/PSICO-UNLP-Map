import CARRERAS from "./carreras";
import { COLORS } from "./theme";

export const USER_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeNGZLfvhsFrfQtESTTlrlaWVFT2pbIbP3rj-eRfG5NcbyVEA/formResponse";

export const USER_FORM_ENTRIES = {
  padron: "entry.1663030365",
  carrera: "entry.1632283846",
  orientacion: "entry.298737325",
  finDeCarrera: "entry.1091014762",
};

export const GRAPH_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLScoeBk1bvCw4Y0X0hoSlmPnuuGfgqk9IrIorHpm6MaoQtylyg/formResponse";

export const GRAPH_FORM_ENTRIES = {
  padron: "entry.651185549",
  carrera: "entry.728299145",
  map: "entry.1761937092",
};

export const BUGS_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeuJrsNfLmIz8_wRD9PBAQTSW6Kah5ReUwWVg1UQejZoVxHSw/formResponse";

export const BUGS_FORM_ENTRIES = {
  padron: "entry.1189307177",
  carrera: "entry.1965954394",
  orientacion: "entry.1972742094",
  finDeCarrera: "entry.842541260",
  bug: "entry.1191769784",
};

export const SPREADSHEET =
  "https://sheets.googleapis.com/v4/spreadsheets/1MupIAqkHxBQ6F0Qx2_cdShedChmO2qxQoOYmR_YrFXc/values";

export const SHEETS = {
  user: "usuarios",
  registros: "mapas",
};

export const KEY = "AIzaSyBN67qib5TlWLDCT0LAPiJUHNxkuqIgh54";

const drawFinDeCarrera = ({
  ctx,
  id,
  x,
  y,
  state: { selected, hover },
  style,
  label
}) => {
  let r = style.size;
  const drawNode = () => {
    if (selected || hover) {
      r += 3
    }
    ctx.beginPath();
    const sides = 4;
    const a = (Math.PI * 2) / sides;
    ctx.moveTo(x, y + r);
    for (let i = 1; i < sides; i++) {
      ctx.lineTo(x + r * Math.sin(a * i), y + r * Math.cos(a * i));
    }
    ctx.closePath();
    ctx.save();

    ctx.fillStyle = style.color;
    ctx.strokeStyle = selected || hover ? 'black' : 'gray';
    ctx.lineWidth = selected || hover ? 3 : 2;
    ctx.globalAlpha = style.opacity
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.textAlign = 'center'
    const lines = label.split('\n')
    const lineheight = 13;
    let mid = lines.length / 2;
    let fontSize = 12
    let maxLineWidth = 0
    for (let i = 0; i < lines.length; i++) {
      if (ctx.measureText(lines[i]).width > maxLineWidth) {
        maxLineWidth = ctx.measureText(lines[i]).width
      }
    }
    if (maxLineWidth > r * 1.5) {
      fontSize -= 1
    }
    let boldness = selected || hover ? 'bold' : '500'
    ctx.font = `${boldness} ${fontSize}px arial`
    ctx.fillStyle = selected || hover ? 'black' : '';
    for (let i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], x, y + ((i + 0.5 - mid) * lineheight))
    }
  };
  return {
    drawNode,
  };
}

export const GRUPOS = {
  Aprobadas: { color: COLORS.aprobadas[400] },
  CBC: {
    shape: "hexagon",
    size: 30,
  },
  "*CBC": {
    color: COLORS.aprobadas[100],
    shape: "square",
    size: 15,
  },
  Habilitadas: { color: COLORS.habilitadas[400] },
  "En Final": { color: COLORS.enfinal[400] },
  "Materias Obligatorias": { color: COLORS.obligatorias[400] },
  "Materias Electivas": { color: COLORS.electivas[400] },
  "Fin de Carrera": {
    color: COLORS.findecarrera[400],
    label: "custom",
    shape: "custom",
    size: 60,
    ctxRenderer: drawFinDeCarrera,
  },
  "Fin de Carrera (Obligatorio)": {
    color: COLORS.findecarrera[400],
    label: "custom",
    shape: "custom",
    size: 60,
    ctxRenderer: drawFinDeCarrera,
  },
  ...CARRERAS.filter((c) => c.orientaciones)
    .flatMap((c) => c.orientaciones)
    .reduce(function (map, obj) {
      obj.color = COLORS[obj.colorScheme][500];
      map[obj.nombre] = obj;
      return map;
    }, {}),
};

export const GRAPHOPTIONS = {
  nodes: { shape: "box" },
  interaction: {
    hover: true,
  },
  physics: {
    // Fede del futuro: Deja de intentar hacer funcionar esto. No trae casi nada de valor al programa, y ya pasaste más de 5 noches intentándolo, sin resultado alguno.
    //   Si estas queriendo hacerlo andar, espero que este comentario te recuerde la realidad: no sirve de nada, y no te va a quedar lindo. Es un capricho, y no lo vale.
    // enabled: true
    enabled: false,
    hierarchicalRepulsion: {
      nodeDistance: 90,
    },
    stabilization: {
      iterations: 30,
      fit: true,
    },
  },
  layout: {
    hierarchical: {
      enabled: true,
      parentCentralization: false,
      blockShifting: false,
      edgeMinimization: false,
      direction: "LR",
    },
  },
  edges: {
    hoverWidth: 0,
    arrowStrikethrough: false,
    arrows: {
      to: { enabled: true, scaleFactor: 0.6, type: "arrow" },
    },
    color: { opacity: 0.7 },
  },
  groups: { ...GRUPOS },
};


export const CREDITOS = {
  "CBC": {
    nombrecorto: "C.I.",
    nombre: "Curso de Ingreso",
    bg: COLORS.aprobadas[50],
    color: "aprobadas",
  },
  "Obligatorias": {
    nombrecorto: "Obligatorias",
    nombre: "Materias Obligatorias",
    bg: COLORS.obligatorias[50],
    color: "obligatorias",
  },
  "Electivas": {
    nombrecorto: "Electivas",
    nombre: "Materias Electivas",
    color: "electivas",
    bg: COLORS.electivas[50],
  },
  "Fin de Carrera": {
    color: "findecarrera",
    bg: COLORS.findecarrera[50],
  }
}
