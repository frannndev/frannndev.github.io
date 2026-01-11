import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pt-32 pb-24 bg-white dark:bg-brand-dark relative transition-colors duration-300 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
            Aviso de privacidad
          </h1>
        </div>

        <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 max-w-none">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AVISO DE PRIVACIDAD</h3>
          
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-4">Identidad y Domicilio del Responsable</h4>
          <p className="mb-4">
            Stampa (comercialmente conocida como "Stampa"), con domicilio en General Miguel Negrete 509, Ignacio Zaragoza, 91910 Veracruz, Ver., es responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
          </p>

          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-4">1. ¿PARA QUÉ FINES UTILIZAREMOS SUS DATOS PERSONALES?</h4>
          <p className="mb-4">Los datos personales que recabamos de usted los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Proveer los servicios de impresión, diseño y personalización de productos.</li>
            <li>Facturación y cobro.</li>
            <li>Envío y entrega de productos a domicilio.</li>
            <li>Contacto para aclaraciones sobre sus archivos de diseño o estatus del pedido.</li>
          </ul>
          <p className="mb-4">De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias que nos permiten brindarle una mejor atención:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Envío de promociones, boletines y novedades sobre nuestros servicios.</li>
          </ul>

          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-4">2. ¿QUÉ DATOS PERSONALES RECABAMOS?</h4>
          <p className="mb-4">Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:</p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Nombre completo o Razón Social.</li>
            <li>Registro Federal de Contribuyentes (RFC) para facturación.</li>
            <li>Domicilio (Fiscal y de entrega).</li>
            <li>Teléfono y Correo electrónico.</li>
            <li>Archivos digitales (imágenes, logotipos) necesarios para la impresión.</li>
          </ul>

          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-4">3. DERECHOS ARCO (Acceso, Rectificación, Cancelación y Oposición)</h4>
          <p className="mb-4">
            Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).
          </p>
          <p className="mb-4">
            Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva enviando un correo electrónico a: <a href="mailto:stampademexico@hotmail.com" className="text-cmyk-cyan hover:underline">stampademexico@hotmail.com</a>.
          </p>

          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-4">4. USO DE COOKIES Y TECNOLOGÍAS DE RASTREO</h4>
          <p className="mb-4">
            Le informamos que en nuestra página web utilizamos cookies y otras tecnologías a través de las cuales es posible monitorear su comportamiento como usuario de internet, para brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos que obtenemos incluyen: horario de navegación, tiempo de navegación en nuestra página y secciones consultadas.
          </p>

          <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-8 mb-4">5. CAMBIOS AL AVISO DE PRIVACIDAD</h4>
          <p className="mb-4">
            El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; o de nuestras prácticas de privacidad. Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad a través de nuestro sitio web: stampa.mx.
          </p>

          <p className="mt-8 text-sm text-slate-500">Última actualización: Enero, 2026</p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;