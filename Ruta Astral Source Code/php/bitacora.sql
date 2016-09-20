SELECT
	bi.id_bitacora,
	bi.fecha_hora,
	bi.accion,
	u.nombre_usuario,
	CASE
		WHEN bi.id_plato IS NOT NULL THEN "Plato"
		WHEN bi.id_puesto IS NOT NULL THEN "Puesto"
		WHEN bi.usuario_alterado IS NOT NULL THEN "Usuario"
		WHEN bi.id_mesa IS NOT NULL THEN "Mesa"
		WHEN bi.id_factura IS NOT NULL THEN "Factura"
		WHEN bi.id_orden IS NOT NULL THEN "Orden"
		WHEN bi.id_reservacion IS NOT NULL THEN "Reservacion"
		WHEN bi.id_metodo IS NOT NULL THEN "Metodo"
	END AS tipo_elemento,
	CASE
		WHEN bi.id_plato IS NOT NULL THEN pa.nombre_plato
		WHEN bi.id_puesto IS NOT NULL THEN pu.nombre_puesto
		WHEN bi.usuario_alterado IS NOT NULL THEN ua.nombre_usuario
		WHEN bi.id_mesa IS NOT NULL THEN m.nombre_mesa
		WHEN bi.id_factura IS NOT NULL THEN f.id_factura
		WHEN bi.id_orden IS NOT NULL THEN o.id_orden
		WHEN bi.id_reservacion IS NOT NULL THEN r.id_reservacion
		WHEN bi.id_metodo IS NOT NULL THEN mp.id_metodo
	END AS nombre_elemento
FROM
	BITACORA AS bi
LEFT JOIN PLATOS AS pa ON bi.id_plato = pa.id_plato
LEFT JOIN PUESTOS AS pu ON bi.id_puesto = pu.id_puesto
LEFT JOIN USUARIOS AS u ON bi.id_usuario = u.id_usuario
LEFT JOIN USUARIOS AS ua ON bi.usuario_alterado = ua.id_usuario
LEFT JOIN MESAS AS m ON bi.id_mesa = m.id_mesa
LEFT JOIN FACTURAS AS f ON bi.id_factura = f.id_factura
LEFT JOIN ORDENES AS o ON bi.id_orden = o.id_orden
LEFT JOIN RESERVACIONES AS r ON bi.id_reservacion = r.id_reservacion
LEFT JOIN METODOS_PAGO as mp ON bi.id_metodo = mp.id_metodo
GROUP BY
	id_bitacora