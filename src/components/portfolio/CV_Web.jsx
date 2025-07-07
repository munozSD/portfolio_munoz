import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid'

function CV_Web() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-sky-900 text-white p-6">
          <h1 className="text-3xl font-bold">JULIO ALBERTO MUÑOZ GARCÍA</h1>
          <h2 className="text-xl mt-1">Full Stack Developer</h2>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
            <div className="flex items-center">
              <PhoneIcon className="h-5 w-5 mr-2" />
              <span>+52 4682393765</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2" />
              <span>Guanajuato, México</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-2 space-y-8">
            {/* Professional Profile */}
            <section>
              <h3 className="text-xl font-bold text-blue-900 border-b border-blue-200 pb-2 mb-4">PERFIL PROFESIONAL</h3>
              <p className="text-gray-700">
                Desarrollador Full Stack con enfoque analítico y actitud resolutiva. Me especializo en Laravel, React y MySQL, integrando soluciones técnicas con visión estratégica. Me motiva trabajar en equipo, automatizar procesos y generar mejoras sostenibles en los sistemas que desarrollo.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-xl font-bold text-blue-900 border-b border-blue-200 pb-2 mb-4">EXPERIENCIA</h3>
              
              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-lg">FullStack Developer</h4>
                  <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">09/23 - 04/25</span>
                </div>
                <p className="text-gray-600 font-medium">Envasadora Aguida - Guanajuato</p>
                <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                  <li>Desarrollé e implementé soluciones para el control de versiones, monitoreo y análisis de procesos de envasado, reduciendo el uso de papel en un 80% y mejorando la velocidad de consultas en un 20%.</li>
                  <li>Optimicé estructuras de datos con JSON, automatizando aplicaciones al inicio del sistema.</li>
                  <li>Desarrollé interfaces conectadas a bases de datos, incluyendo un sistema para el área de sanitizantes que mejoró precisión y redujo errores operativos.</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-lg">FullStack Developer</h4>
                  <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">01/23 - 09/23</span>
                </div>
                <p className="text-gray-600 font-medium">Almacenadora de Occidente Xtrapak Jalisco</p>
                <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                  <li>Desarrollé e implementé funciones clave en el sistema de control de acceso, incluyendo una API de WhatsApp para alertas y un módulo de geolocalización.</li>
                  <li>Diseñé un Help Desk para soporte técnico y optimicé la gestión de tickets, eliminando el uso de papel mediante su digitalización.</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-lg">FullStack Developer</h4>
                  <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">06/22 - 12/22</span>
                </div>
                <p className="text-gray-600 font-medium">Lerco Puebla</p>
                <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                  <li>Colaboré en el desarrollo y mantenimiento de sistemas internos con PHP y Yil2, atendiendo requerimientos funcionales.</li>
                  <li>Implementé mejoras en módulos como Cobro Cajas y Registro de Padres, personalizando formularios, notificaciones y tickets.</li>
                  <li>Participé en la configuración y pruebas de entornos locales para el despliegue de aplicaciones.</li>
                </ul>
              </div>
            </section>

            {/* Key Achievements */}
            <section>
              <h3 className="text-xl font-bold text-blue-900 border-b border-blue-200 pb-2 mb-4">LOGROS CLAVE</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Desarrollé e implementé aplicaciones para el control de versiones en procesos de envasado, mejorando la trazabilidad y reduciendo errores.</li>
                <li>Optimicé la generación de fórmulas en el área de preparación, aumentando en un 20% la velocidad de procesamiento y reduciendo en un 30% el espacio de almacenamiento por producción.</li>
                <li>Estandaricé la nomenclatura de materias primas para agilizar las consultas en los módulos del sistema de producción y monitoreo.</li>
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Education */}
            <section>
              <h3 className="text-xl font-bold text-blue-900 border-b border-blue-200 pb-2 mb-4">EDUCACIÓN</h3>
              <div>
                <h4 className="font-bold">Ingeniería en Sistemas Computacionales - 2015</h4>
                <p className="text-gray-600">Universidad Interactiva y a Distancia del Estado de Guanajuato - UNIDEG</p>
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-xl font-bold text-blue-900 border-b border-blue-200 pb-2 mb-4">IDIOMAS</h3>
              <div>
                <p className="font-medium">Español: <span className="font-normal">Nativo</span></p>
                <p className="font-medium mt-2">Inglés: <span className="font-normal">Comprensión de lectura técnica y documentación. Nivel intermedio en lectura y comprensión escrita.</span></p>
              </div>
            </section>

            {/* Tech Stack */}
            <section>
              <h3 className="text-xl font-bold text-blue-900 border-b border-blue-200 pb-2 mb-4">STACK DE HERRAMIENTAS</h3>
              <div>
                <h4 className="font-bold text-gray-800 mb-2">Tecnologías Dominadas:</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">Frontend:</p>
                    <p className="text-sm text-gray-700">Javascript, React, Next, Angular, jQuery, HTML, Tailwind, Bootstrap, CSS</p>
                  </div>
                  <div>
                    <p className="font-medium">Backend:</p>
                    <p className="text-sm text-gray-700">PHP, Laravel, Yil2, MySQL, .NET, C#, node, Postgre, Python</p>
                  </div>
                  <div>
                    <p className="font-medium">Otras Herramientas:</p>
                    <p className="text-sm text-gray-700">Vendor, WordPress, Git, Github APIs, AJAX, Linux, XAMP, Agile, MVC</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Interests */}
            <section>
              <h3 className="text-xl font-bold text-blue-900 border-b border-blue-200 pb-2 mb-4">INTERESES</h3>
              <p className="text-gray-700">
                Me interesa la exploración tecnológica orientada al procesamiento y visualización de datos para respaldar la toma de decisiones. Disfruto estructurar e integrar información que mejore el control de procesos en sistemas complejos, especialmente en entornos industriales.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV_Web;