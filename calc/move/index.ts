export interface MoveSc {
  start: number;
  fine: number;
  x: number;
}

export type MoveType = "tanh" | "normal";

export function move(moveSc: MoveSc, type: MoveType="normal") {
  switch (type) {
    case "tanh":
      var x = tamaño({ start: -4, fine: 4, x: moveSc.x });
      var Esi = Math.E ** (2 * x);
      return tamaño({
        start: moveSc.start,
        fine: moveSc.fine,
        x: 0.5 + ((1 - 0.5) * (Esi - 1)) / (Esi + 1),
      });
    case "normal":
      return tamaño(moveSc);
  }
}

export function tamaño(moveSc: MoveSc) {
  return moveSc.start + (moveSc.fine - moveSc.start) * moveSc.x;
}