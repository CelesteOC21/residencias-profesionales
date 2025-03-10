"use client";
import { useEffect, useState } from "react";
import { CardsCotizacion } from "@/app/components/admincomponents/cotizaciones/card";
export default function cotizaciones() {
  const [cotizaciones, setCotizaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchCotizaciones() {
      try {
        const response = await fetch("/api/cotizaciones");
        const data = await response.json();
        setCotizaciones(data);
      } catch (error) {
        console.error("Error fetching cotizaciones:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCotizaciones();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Cargando cotizaciones...</p>
      ) : (
        <div className="grid grid-cols-5">
          <CardsCotizacion cotizaciones={cotizaciones} />
        </div>
      )}
    </div>
  );
}
