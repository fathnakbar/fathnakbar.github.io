function rgbstring() {
    const isNaN = (val) => Number.isNaN(parseInt(val));
  const keys = Object.keys(this)
    // @ts-ignore
    .filter((val) => val != "toString" && !isNaN(this.a) || val != "a")
    .join("");
  const val = Object.values({...this, a: (this['a'] / 255).toFixed(2)})
    .filter((val) => !isNaN(val))
    .join(",");
  return `${keys}(${val})`;
}

function control(rgb) {
  const color = new Proxy(rgb, {
    get(target, prop, receiver) {
      if (!(prop in target)) {
        return undefined
      }
      let value = function (val) {
        if (prop == 'a') {
            val = val * 255;
            val = val > 255 ? 255 : Math.floor(val);
        }
        let res = control({ ...target, ...{ [prop]: val } });
        return res;
      };

      value.toString = () => {
        return target[prop];
      };

      return value;
    },
  });

  return {
    ...color,
    toString: rgbstring.bind(rgb),
    hex: function () {
      return `#${
        Array.from('rgba')
        .filter((val) => !Number.isNaN(parseInt(this[val])))
        .map((val) => parseInt(this[val]).toString(16))
        .join("")}`;
    },
  };
}

export default function hexToRgbA(hex) {
  let res = hex
    .match(/#([0-f]{1,2})([0-f]{1,2})([0-f]{1,2})([0-f]{0,2})/i)
    .slice(1);
  const int = res.map((val) => parseInt(val, 16));

  const rgb = {
    r: int[0],
    g: int[1],
    b: int[2],
    a: int[3],
  };

  return control(rgb);
}

// console.log(`${hexToRgbA('#ffffff')}`)

let color = hexToRgbA("#63adf2");
console.log(`${color.a(.4)}`);
