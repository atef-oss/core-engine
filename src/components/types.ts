// types.ts
export type Id = string | number;
export type Vector2 = [number, number];
export type Vector3 = [number, number, number];
export type Vector4 = [number, number, number, number];

export type Bounds = {
  min: Vector3;
  max: Vector3;
};

export type AABB = {
  center: Vector3;
  halfExtents: Vector3;
};

export type Plane = {
  normal: Vector3;
  distance: number;
};

export type Sphere = {
  center: Vector3;
  radius: number;
};

export type Ray = {
  origin: Vector3;
  direction: Vector3;
};

export type Box = {
  center: Vector3;
  halfExtents: Vector3;
};