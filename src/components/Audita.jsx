// SEO METADATOS IMPORTANTE !!!

// Si no usas etiquetas HTML semánticas 
// (<h1>, <p>, <article>, etc.),
// tu sitio será menos visible para motores de búsqueda.

(function() {
  const resources = performance.getEntriesByType("resource");
  const blockingResources = resources.filter(r => r.renderBlockingStatus === "blocking");

  console.log(`🔍 Recursos bloqueantes encontrados: ${blockingResources.length}`);
  console.table(blockingResources.map(r => ({
    Nombre: r.name,
    Tipo: r.initiatorType,
    Tiempo: r.duration.toFixed(2) + " ms",
    Tamaño: (r.decodedBodySize / 1024).toFixed(2) + " KB",
    Caché: r.deliveryType,
    Protocolo: r.nextHopProtocol,
  })));

  // Mostrar advertencias si hay muchos recursos bloqueantes
  if (blockingResources.length > 5) {
    console.warn("⚠️ Hay muchos recursos bloqueando el renderizado. Considera optimizar tu carga.");
  } else if (blockingResources.length === 0) {
    console.log("✅ ¡Excelente! No hay recursos que bloqueen el renderizado.");
  }
})();