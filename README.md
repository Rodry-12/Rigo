# Instrucciones para Restaurar la Base de Datos

Para restaurar la base de datos desde un archivo de respaldo `.bak` en SQL Server, sigue estos pasos:

1. **Abrir SQL Server Management Studio (SSMS)**.
2. **Conéctate a tu servidor de bases de datos**.
3. **Haz clic derecho en "Bases de datos"** y selecciona **"Restaurar base de datos..."**.
4. **Selecciona "Dispositivo"** y elige el archivo `.bak` desde la ubicación `C:\ruta\al\archivo\RigoRigo.bak`.
5. **Haz clic en "OK"** para completar la resta
Alternativamente, si prefieres usar T-SQL, ejecuta el siguiente script en SSMS:

```sql
RESTORE DATABASE [RigoRigoDB]
FROM DISK = 'C:\ruta\al\archivo\RigoRigo.bak'
WITH REPLACE;


### Explicación de los pasos:

1. **Requisitos previos**:  como .NET 6 , visual studio y Sql Server instalados
2. **Clonar el repositorio**: https://github.com/Rodry-12/Rigo.git
  ## 1. Verificar Instalación de Git

  Asegúrate de que tienes Git instalado en tu sistema. Para verificar, ejecuta este comando en la terminal:

  ```bash
  git --version

  Para clonar el proyecto se debe ejecutar el siguiente comando en tu terminal o línea de comando: git clone https://github.com/Rodry-12/Rigo.git

  Esto descargará el contenido del repositorio en tu máquina local.

  Ingresa al repositorio con el comando cd Rigo

3. **Configuración de la base de datos**: Si el proyecto usa una base de datos, se proporciona un ejemplo de cómo configurar la conexión.

En la siguiente ruta encontraras donde configurar la cadena de conexión según tu instancia de sql.
Rigo\RigoRigoBackendSolucion\RigoRigoBackend\appsettings.json, especificamente en la línea 10.

Este documento detalla los pasos necesarios para configurar y ejecutar un proyecto Web API desarrollado en .NET 6.

---

## Requisitos Previos

Asegúrate de cumplir con los siguientes requisitos antes de proceder:
1. Un IDE como **Visual Studio** (versión 2022 o superior) o **Visual Studio Code**.
2. Una vez clonado el proyecto abre la solución del back en la siguiente ruta: Rigo\RigoRigoBackendSolucion\RigoRigoBackend.sln
3. restaura las dependencias utilizando el comando dotnet restore o desde la interfaz de visual studio 2022 o superior.
4. Recuerda configurar la cadena de conexión como lo expliqué anteriormente en el archivo appsettings.json.
  "ConnectionStrings": {
    "DefaultConnection": "Server=TuInstancia;Database=RigoRigoDB;Trusted_Connection=True;"
  }
5. Ejecutar el proyecto, sea desde la interfaz de visual estudio o desde la linea de comando: dotnet run
Ya puedes probar la API desde el swagger https://localhost:7170/swagger


# Documentación para Ejecutar un Proyecto Frontend en Angular

Este documento detalla los pasos necesarios para configurar y ejecutar un proyecto frontend desarrollado en Angular. La versión de Node.js requerida es **16.20.2**.

---

## Requisitos Previos

Asegúrate de cumplir con los siguientes requisitos antes de proceder:

1. **Node.js**: Versión 16.20.2 instalada. Descárgalo desde [https://nodejs.org/](https://nodejs.org/).
   - Verifica la versión de Node.js instalada ejecutando:
     ```bash
     node -v
     ```
2. **npm**: Administrador de paquetes que se instala junto con Node.js.
   - Verifica la versión de npm instalada ejecutando:
     ```bash
     npm -v
     ```
3. **Angular CLI**: Instalado globalmente.
   - Instálalo ejecutando:
     ```bash
     npm install -g @angular/cli
     ```
   - Verifica la instalación con:
     ```bash
     ng version
     ```

---

## Pasos para Configurar y Ejecutar el Proyecto

1. **Accede al proyecto en la siguiente ruta: Rigo\RigoRigoFrontend**. Abrelo con tu editor o IDE preferido.
2. Instala las depentendicias con el siguiente comando desde la terminal: npm install
3. Para ejecutar el proyecto ejecuta el siguiente comando: npm start
La aplicación será accedida en la siguiente url: http://localhost:4200














