export const Expresion = {
  SoloNumeros: /^[0-9]+$/,
  NumerosYLetras: /^[A-Za-z0-9]+$/,
  Ruc: /[0-9]{2}[0-9]{8}[0]{1}[0]{1}[1]{1}?$/,
  CedulaTelefono: /[0-9]{2}[0-9]+$/,
  SoloLetrasAcentosEspacios: /^[^$%&{}|<>]*$/, //ACEPTA TODOS MENOS ESOS CARACTERES
  SoloLetrasAcentosEspaciosSinNumeros: /^[^$%&{}|<>]*$/, //ACEPTA TODO MENOS ESOS CARACTERES
  Contrasena: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
  Sku: /^[A-Za-z0-9_-]+$/,
  DolarYCentavo: /^[0-9]+([.][0-9]+)?$/,
  DimensionConDecimales: /^[0-9]+([.][0-9]+)?$/,
  DimensionConComa: /^[0-9]+([.][0-9]+)?$/,
  TiempoDescpacho: /^[0-9]+$/,
};
