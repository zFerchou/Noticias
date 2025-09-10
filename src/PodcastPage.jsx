import React from "react";

const InfoPage = () => {
  // ID del video de YouTube proporcionado
  const youtubeVideoId = "aqA6SeE959U";

  // ===== DIAGRAMAS DE ARQUITECTURA REALES =====
  const diagramImageUrl = "https://miro.medium.com/v2/resize:fit:1400/1*6_rmn_2U-xW57h2XqKqTw.png";
  const architectureImageUrl = "https://developer.android.com/static/guide/platform/images/android-stack_2x.png";
  const mobileAppImageUrl = "https://www.altexsoft.com/media/2021/12/mobile-app-architecture.png";

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        lineHeight: "1.7",
        backgroundColor: "#f4f6f9",
        color: "#333",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        boxSizing: "border-box",
      }}
    >
      {/* Introducción */}
      <section style={{ 
        textAlign: "center", 
        marginBottom: "2.5rem",
        padding: "1rem"
      }}>
        <h1
          style={{
            fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
            color: "#1e3a8a",
            marginBottom: "1rem",
            fontWeight: "700",
          }}
        >
          📱 Arquitectura de Aplicaciones Móviles
        </h1>
        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
          }}
        >
          La arquitectura de aplicaciones móviles es la estructura que define
          cómo se organiza, comunica y evoluciona una app. Un buen diseño permite
          que la aplicación sea rápida, segura, fácil de mantener y capaz de
          integrarse con servicios modernos.
        </p>
      </section>
      
      {/* Video Podcast de YouTube */}
      <section style={{ 
        marginBottom: "2.5rem", 
        textAlign: "center",
        padding: "0 1rem"
      }}>
        <h2 style={{ 
          color: "#2563eb", 
          marginBottom: "1rem",
          fontSize: "clamp(1.4rem, 4vw, 1.8rem)"
        }}>
          🎥 Podcast en Video sobre IA
        </h2>
        <div
          style={{
            width: "100%",
            maxWidth: "720px",
            aspectRatio: "16/9",
            margin: "0 auto",
            border: "4px solid #1e3a8a",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
            background: "#000",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeVideoId}?si=YYahG68PVghl9chy`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              border: "none",
            }}
          ></iframe>
        </div>
        <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#666" }}>
          Video: "¿Cómo aprender Inteligencia Artificial en 2024?" - Todo Code
        </p>
      </section>

      {/* Resumen de la investigación */}
      <section
        style={{
          marginBottom: "2.5rem",
          background: "#fff",
          padding: "clamp(1.5rem, 4vw, 2rem)",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ 
          color: "#2563eb", 
          fontSize: "clamp(1.4rem, 4vw, 1.8rem)",
          marginBottom: "1.5rem"
        }}>
          🖼️ Diagramas de Arquitectura
        </h2>

        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img
            src={architectureImageUrl}
            alt="Arquitectura de software"
            style={{
              maxWidth: "100%",
              width: "min(100%, 600px)",
              borderRadius: "8px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
              marginBottom: "1rem",
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <p style={{ fontSize: "0.9rem", color: "#666", fontStyle: "italic" }}>
            
          </p>
        </div>

        <h3 style={{ 
          marginTop: "1.5rem", 
          color: "#374151",
          fontSize: "1.25rem"
        }}>
          Modelos arquitectónicos más comunes
        </h3>
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>MVC:</strong> Separa la lógica de negocio, la interfaz y el
            control de eventos.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>MVP:</strong> El presentador actúa como intermediario entre
            la vista y el modelo.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>MVVM:</strong> Vincula datos y vista mediante data binding.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Clean Architecture:</strong> Divide la aplicación en capas
            independientes para mayor escalabilidad.
          </li>
        </ul>

        <h3 style={{ 
          marginTop: "1rem", 
          color: "#374151",
          fontSize: "1.25rem"
        }}>
          Integración con servicios en la nube
        </h3>
        <p>
          Permite almacenar datos, autenticar usuarios y enviar notificaciones
          sin depender del dispositivo. Ejemplos:{" "}
          <em>Firebase, AWS Amplify, Azure Mobile Apps</em>.
        </p>

        <h3 style={{ 
          marginTop: "1rem", 
          color: "#374151",
          fontSize: "1.25rem"
        }}>
          Almacenamiento local y sincronización
        </h3>
        <p>
          Uso de <em>SQLite</em> o <em>Room</em> para guardar información sin
          conexión. La sincronización automática con la nube asegura consistencia
          de datos.
        </p>

        <h3 style={{ 
          marginTop: "1rem", 
          color: "#374151",
          fontSize: "1.25rem"
        }}>
          Escalabilidad y microservicios
        </h3>
        <p>
          Arquitecturas basadas en <em>microservicios</em> permiten independencia
          de funciones y actualizaciones fáciles.
        </p>

        <h3 style={{ 
          marginTop: "1rem", 
          color: "#374151",
          fontSize: "1.25rem"
        }}>
          Retos con tecnologías emergentes
        </h3>
        <ul style={{ paddingLeft: "1.2rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>IA:</strong> Asistentes virtuales, NLP y visión por
            computadora.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>IoT:</strong> Conexión y control de dispositivos físicos.
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong>Realidad aumentada:</strong> Experiencias interactivas con
            bajo tiempo de respuesta.
          </li>
        </ul>
      </section>

      {/* Sección de Diagramas */}
      <section
        style={{
          background: "#fff",
          padding: "clamp(1.5rem, 4vw, 2rem)",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          marginBottom: "2rem"
        }}
      >
        <h2 style={{ 
          color: "#2563eb", 
          marginBottom: "1.5rem",
          fontSize: "clamp(1.4rem, 4vw, 1.8rem)"
        }}>
          
        </h2>
        
        {/* Diagramas colocados aquí, después del título */}
        <div style={{ 
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem"
        }}>
          {/* Diagrama principal */}
          <div>
            <img
              src={diagramImageUrl}
              alt="Diagrama de arquitectura de aplicaciones móviles"
              style={{
                maxWidth: "100%",
                width: "min(100%, 600px)",
                borderRadius: "8px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <p style={{ fontSize: "0.9rem", color: "#666", fontStyle: "italic", marginTop: "0.5rem" }}>
              
            </p>
          </div>

          {/* Imagen adicional */}
          <div>
            <img
              src={mobileAppImageUrl}
              alt="Desarrollo de aplicaciones móviles"
              style={{
                maxWidth: "100%",
                width: "min(100%, 500px)",
                borderRadius: "8px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <p style={{ fontSize: "0.9rem", color: "#666", fontStyle: "italic", marginTop: "0.5rem" }}>
              
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        padding: "1.5rem",
        color: "#666",
        fontSize: "0.9rem",
        borderTop: "1px solid #ddd",
        marginTop: "auto"
      }}>
        <p>© 2023 Arquitectura de Aplicaciones Móviles. Todos los derechos reservados.</p>
      </footer>

      {/* Estilos globales para body y html */}
      <style>
        {`
          html, body, #root {
            margin: 0;
            padding: 0;
            width: 100%;
            min-height: 100vh;
          }
          
          * {
            box-sizing: border-box;
          }
          
          @media (max-width: 768px) {
            .container {
              padding: 1.5rem !important;
            }
            
            h1 {
              font-size: 2rem !important;
            }
            
            h2 {
              font-size: 1.5rem !important;
            }
            
            h3 {
              font-size: 1.2rem !important;
            }
            
            p, li {
              font-size: 1rem !important;
            }
            
            section {
              padding: 1.5rem !important;
            }
          }

          @media (max-width: 480px) {
            .container {
              padding: 1rem !important;
            }
            
            h1 {
              font-size: 1.7rem !important;
            }
            
            h2 {
              font-size: 1.3rem !important;
            }
            
            h3 {
              font-size: 1.1rem !important;
            }
            
            p, li {
              font-size: 0.95rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default InfoPage;