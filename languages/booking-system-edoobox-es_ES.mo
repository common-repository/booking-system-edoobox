��    6      �  I   |      �  d   �  .        5  �   T  �     F   �  ?     �   D  a   �     ^  G   x     �  K   �     #	     +	    B	     E
  A   [
  /   �
     �
     �
  	   �
  "   �
  !        9     E  L   K     �  N   �     �            
        )     :     A     Q     Z  
   h     s    �     �  �   �  y   C  b   �  	      �  *     )     9     H  $   _     �  &   �  �  �  t   �  (        A  �   O  �     R   �  <   O  �   �  t         �  W        m  X   �     �  "   �  C    $   P  F   u  B   �     �          &  %   :  +   `     �     �  C   �  "   �  V        c     l     �     �     �  
   �     �     �     �  
   �       5       T  �   r  �   1   ]   �      &!  8  7!     p#     ~#     �#  '   �#     �#  .   �#           0                  *         #       '   6       %         1            (   2                        /          "   &       !       3           -   	                                 )      
              .   ,                  5              $   4   +    " is a base template. Please do not use the base templates predefined by edoobox as template names." "List" View - Listenansicht (default/fallback) "Table" View - Tabellenansicht 1. To configure your edoobox Booking Plugin, you must <a href="https://app1.edoobox.com/login/signup">create an account</a> / <a href="https://app1.edoobox.com/login">login</a> 2. Copy your account code and public key from your edoobox account. You will find these Information Under the account Shortcut (Top Left)> Settings> API Access Management> Public Key. 3. Copy the account code and the public key into the appropriate boxes 4. Integrate edoobox with the shortcode generator on your side. All pages that contain an edoobox shortcode are listed here. If a page is missing, newly added or incorrectly identified, click on the button "Search All Pages" to re-index the pages. Any returned variable from the v1/offers API is automatically added to usable template-variables. Base and custom templates Below you can see a list of variables that are usable in the templates. Booking System Edoobox By flushing the cache, you will immediately see changes in displayed pages. Caching Caching Time (Minutes) Caching has pros and cons. While it speeds up pageloading, it may cause the page to show outdated data. So a lower value will result in longer loading times, but more likely correct data. If edoobox seems slow however, we recommend adding a few minutes more. Check API Credentials Copy the following shortcode and paste it into your desired page. Define how long edoobox pages should be cached. Design Cache Developers only Edit Post Edoobox Could not fetch Api Data:  Expand example variables / values Flush Cache Hours If there is already a saved template with that name, it will be overwritten. Nothing cached yet. Online booking system – Advertise your courses, seminars, and events easily! Options Page Indexing Plugin Cache Remove All Search All Pages Select Select Template Settings Shortcode Pro Shortcodes Template Name: The edoobox plugin minifies any custom styles, whenever that styles is loaded for the first time. From then on the minifies style is loaded and is no longer minified again. Should you need to minify the style again you can delete the references to the minified versions below. The online booking system The variables are white-space sensitive, meaning that they need a space between the variable and the double brackets like this --> {{ variable }} To optimize the loading time of Wordpress pages, all pages containing an edoobox plugin shortcode are indexed in advance. Using 'name' the variable would look like this in the template: {{ name }} and output: 'Event One' View Post With the Shortcode Pro you have the possibility to highlight your next offers at a place defined by you (e.g. on the start page) shortly before the start. In the variable "limit" define the number of offers that will be displayed. With HTML knowledge you can also personalise them optically and create You will find the appropriate variables under "Example variables / extend values". We provide you with two templates. The template table and list view cannot be changed, but can be used for your own template. Your Shortcode: copy shortcode edoobox booking system the ammount of events to show. (1-X) the shortcode type the template name that should be used. Project-Id-Version: Booking System Edoobox
PO-Revision-Date: 2024-04-05 10:43+0200
Last-Translator: 
Language-Team: 
Language: es_ES
MIME-Version: 1.0
Content-Type: text/plain; charset=UTF-8
Content-Transfer-Encoding: 8bit
Plural-Forms: nplurals=2; plural=(n != 1);
X-Generator: Poedit 3.4.2
X-Poedit-Basepath: ..
X-Poedit-Flags-xgettext: --add-comments=translators:
X-Poedit-WPHeader: booking-system-edoobox.php
X-Poedit-SourceCharset: UTF-8
X-Poedit-KeywordsList: __;_e;_n:1,2;_x:1,2c;_ex:1,2c;_nx:4c,1,2;esc_attr__;esc_attr_e;esc_attr_x:1,2c;esc_html__;esc_html_e;esc_html_x:1,2c;_n_noop:1,2;_nx_noop:3c,1,2;__ngettext_noop:1,2
X-Poedit-SearchPath-0: .
X-Poedit-SearchPathExcluded-0: *.min.js
X-Poedit-SearchPathExcluded-1: node_modules
 " es una plantilla base. Por favor, no use las plantillas base predefinidas por edoobox como nombres de plantillas." Vista "Lista" (predeterminado/retroceso) Vista "Tabla" 1. Para configurar su edoobox Booking Plugin, debe <a href="https://app1.edoobox.com/login/signup">crear una cuenta</a> / inicio de <a href="https://app1.edoobox.com/login">sesión</a> 2. Copie el código de su cuenta y la clave pública de su cuenta de edoobox. Usted encontrará estos
Información Bajo el acceso directo de la cuenta (arriba a la izquierda)> Configuración> Administración de acceso a la API> Clave pública. 3. Copie el código de cuenta y la clave pública en las casillas correspondientes 4. Integre edoobox con el generador de shortcode de su lado. Todas las páginas que contienen un atajo de edoobox están listadas aquí. Si falta una página, se acaba de añadir o se ha identificado incorrectamente, haga clic en el botón "Buscar todas las páginas" para volver a indexar las páginas. Cualquier variable devuelta de la API v1/offers se añade automáticamente a las variables de plantilla utilizables. Plantillas base y personalizadas A continuación puede ver una lista de variables que son utilizables en las plantillas. Sistema de reservas edoobox Al vaciar la memoria caché, verá inmediatamente los cambios en las páginas mostradas. Caché Tiempo de almacenamiento (minutos) El caché tiene pros y contras. Mientras que acelera la carga de la página, puede causar que la página muestre datos obsoletos. Así que un valor menor resultará en un mayor tiempo de carga, pero es más probable que los datos sean correctos. Sin embargo, si edoobox parece lento, recomendamos añadir unos minutos más. Compruebe las credenciales de la API Copie el siguiente código abreviado y péguelo en la página deseada. Definir cuánto tiempo las páginas edoobox deben ser almacenadas. Caché de diseño Para desarrolladores Editar Publicación edoobox no pudo obtener datos de Api: Expandir las variables / valores de ejemplo Vaciar la caché Horario Si ya hay una plantilla guardada con ese nombre, se sobrescribirá. Todavía no hay nada en la caché. Sistema de reservas en línea: ¡Anuncia tus cursos, seminarios y eventos fácilmente! Opciones Indización de páginas Caché del plugin Eliminar todo Buscar en todas las páginas Selección Selecciona una plantilla Ajustes Shortcode Pro Shortcodes Nombre de la plantilla: El plugin edoobox minifica cualquier estilo personalizado, siempre que ese estilo se cargue por primera vez. A partir de ese momento, el estilo minificado se carga y no se vuelve a minificar. Si necesita minificar el estilo de nuevo, puede eliminar las referencias a las versiones minificadas a continuación. El sistema de reservas online Las variables son sensibles al espacio, lo que significa que necesitan un espacio entre la variable y los dobles paréntesis como sigue: <pre class="inline"><code>{{ variable }}</code></pre> Para optimizar el tiempo de carga de las páginas de Wordpress, todas las páginas que contienen un atajo de plugin edoobox son indexadas de antemano. Usando 'nombre' la variable se vería así en la plantilla: {{ name }} y salida: 'Evento uno' Ver publicación Con el Shortcode Pro tiene la posibilidad de resaltar sus próximas ofertas en un lugar definido por usted (por ejemplo, en la página de inicio) poco antes del comienzo. En la variable "límite" defina el número de ofertas que se mostrarán. Con conocimientos de HTML también puede personalizarlas ópticamente y crearlas Usted encontrará las variables adecuadas en "Variables de ejemplo / valores de extensión". Le proporcionamos dos plantillas. La tabla de plantillas y la vista de lista no se pueden modificar, pero se pueden utilizar para su propia plantilla. Tu shortcode: shortcode de copia Sistema de reserva edoobox la cantidad de eventos a mostrar. (1-X) el tipo de shortcode el nombre de la plantilla que debe utilizarse. 