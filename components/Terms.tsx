import React, { useEffect } from 'react';

const Terms: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-32 pb-24 bg-white dark:bg-brand-dark relative transition-colors duration-300 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
            Términos y condiciones
          </h1>
        </div>

        <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">TÉRMINOS Y CONDICIONES DE USO Y SERVICIO - STAMPA</h3>
          <p className="mb-6">Fecha de última actualización: Sábado 10 de enero de 2026</p>
          <p className="mb-8">
            Bienvenido a Stampa. Al solicitar nuestros servicios de impresión, diseño, serigrafía o adquirir productos personalizados, usted (en adelante "El Cliente") acepta plenamente los siguientes términos y condiciones establecidos por Stampa.
          </p>

          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-4">1. OBJETO DEL SERVICIO</h4>
          <p className="mb-4">
            Stampa ofrece servicios de impresión en diversos formatos (offset, digital, gran formato, serigrafía), así como la personalización de artículos promocionales (tazas, plumas, textiles, menús, etc.).
          </p>

          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-4">2. ARCHIVOS Y DISEÑOS PROPORCIONADOS POR EL CLIENTE</h4>
          <p className="mb-4">Para garantizar la calidad del trabajo, El Cliente acepta lo siguiente:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Responsabilidad del Archivo:</strong> El Cliente es el único responsable de verificar la ortografía, gramática, dimensiones y resolución de los archivos enviados. Stampa no se hace responsable por errores presentes en el archivo original (ej. "dedazos", imágenes pixeladas por baja resolución).</li>
            <li><strong>Formatos:</strong> Los archivos deben enviarse en los formatos solicitados (PDF, AI, PSD, etc.) y convertidos a curvas (textos trazados) para evitar cambios en la tipografía.</li>
            <li><strong>Propiedad Intelectual:</strong> El Cliente declara ser el titular de los derechos o tener la licencia de uso de las imágenes, logotipos y marcas que solicita imprimir. El Cliente libera a Stampa de toda responsabilidad legal, demanda o reclamación por violaciones a derechos de autor o propiedad industrial de terceros.</li>
          </ul>

          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-4">3. VARIACIONES DE COLOR Y PRODUCCIÓN (CLÁUSULA IMPORTANTE)</h4>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><strong>RGB vs. CMYK:</strong> El Cliente reconoce que los colores vistos en pantalla (monitores/celulares en modo RGB) pueden tener una variación tonal de entre el 10% y el 15% respecto al producto impreso (tinta/pigmento en modo CMYK o Pantones). Esta variación es natural en la industria de las artes gráficas y no constituye motivo de devolución.</li>
            <li><strong>Sustratos:</strong> Los colores pueden variar dependiendo del material donde se impriman (papel bond, lona, textil, cerámica).</li>
          </ul>

          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-4">4. TIEMPOS DE ENTREGA</h4>
          <p className="mb-4">
            Los tiempos de entrega proporcionados son estimados y comienzan a contar a partir de la confirmación del pago y la aprobación final del archivo de diseño.
          </p>
          <p className="mb-4">
            Stampa no se hace responsable por retrasos derivados de causas de fuerza mayor (desastres naturales, fallas en suministro eléctrico, retrasos de paqueterías externas).
          </p>

          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-4">5. POLÍTICA DE PAGOS</h4>
          <p className="mb-4">
            Para iniciar cualquier producción, se requiere un anticipo del [50%] del valor total del proyecto. El saldo restante deberá liquidarse al momento de la entrega o antes del envío.
          </p>
          <p className="mb-4">En trabajos urgentes, se podrá requerir el pago del 100% por adelantado.</p>
          <p className="mb-4">Los precios están sujetos a cambio sin previo aviso, salvo en cotizaciones vigentes (vigencia estándar de 15 días).</p>

          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-4">6. CANCELACIONES Y DEVOLUCIONES</h4>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Productos Personalizados:</strong> Debido a la naturaleza personalizada de nuestros servicios (serigrafía, menús con logo, etc.), NO se aceptan devoluciones ni cancelaciones una vez que el proceso de producción ha iniciado o que el material ha sido comprado.</li>
            <li><strong>Garantía por Defecto:</strong> Si el producto presenta un defecto de fabricación imputable directamente a Stampa (ej. manchas de tinta, corte erróneo, material roto), El Cliente tiene un plazo de [3] días hábiles tras recibir el pedido para notificarlo. Stampa evaluará la reposición del material defectuoso. No se realizarán reembolsos en efectivo, únicamente reposición de producto.</li>
          </ul>

          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-4">7. ALMACENAMIENTO DE MATERIAL</h4>
          <p className="mb-4">
            Si El Cliente no recoge sus trabajos impresos en un plazo de [30] días naturales tras la notificación de "listo para entrega", Stampa se reserva el derecho de desechar el material sin responsabilidad alguna y sin reembolso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;