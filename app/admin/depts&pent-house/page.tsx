"use client";

import { useMemo, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Edit3, Trash2, ChevronLeft, ChevronRight } from "lucide-react";
import AddDeptPentHouse from "@/components/admin/depts&pent-house/AddDeptPentHouse";

type Inmueble = {
  id: number;
  nombre: string;
  tipo: string;
  precio: number;
  estado: "Disponible" | "Vendido" | "Reservado";
};

const sampleData: Inmueble[] = [
  { id: 1, nombre: "Lote La Vid 12", tipo: "Lote", precio: 1200000, estado: "Disponible" },
  { id: 2, nombre: "PH Ávila 3B", tipo: "Pent House", precio: 4200000, estado: "Reservado" },
  { id: 3, nombre: "Casa Palma 7", tipo: "Casa", precio: 2800000, estado: "Vendido" },
  { id: 4, nombre: "Lote Lomas 21", tipo: "Lote", precio: 1500000, estado: "Disponible" },
  { id: 5, nombre: "Depto Centro 101", tipo: "Departamento", precio: 980000, estado: "Disponible" },
  { id: 6, nombre: "Casa Prefab 2", tipo: "Casa Prefabricada", precio: 780000, estado: "Reservado" },
];

export default function DepartamentosPentHouse() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [perPage] = useState(5);
  const [sortKey, setSortKey] = useState<keyof Inmueble | null>(null);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let data = sampleData.filter(
      (r) =>
        r.nombre.toLowerCase().includes(q) ||
        r.tipo.toLowerCase().includes(q) ||
        String(r.precio).includes(q) ||
        r.estado.toLowerCase().includes(q)
    );

    if (sortKey) {
      data = data.sort((a, b) => {
        const va = a[sortKey];
        const vb = b[sortKey];
        if (typeof va === "number" && typeof vb === "number") {
          return sortDir === "asc" ? va - vb : vb - va;
        }
        return sortDir === "asc"
          ? String(va).localeCompare(String(vb))
          : String(vb).localeCompare(String(va));
      });
    }

    return data;
  }, [query, sortKey, sortDir]);

  const total = filtered.length;
  const pages = Math.max(1, Math.ceil(total / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  function toggleSort(key: keyof Inmueble) {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  return (
    <section className="space-y-5">
      <div className="text-right"> 
        <AddDeptPentHouse />
      </div>

      <Card className="w-full">
        <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="font-semibold">LOTES FRACC LA VID RESIDENCIAL CUAUTLANCINGO</CardTitle>
            <p className="text-sm text-muted-foreground">Listado de propiedades</p>
          </div>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="cursor-pointer" onClick={() => toggleSort("nombre")}>Nombre</TableHead>
                  <TableHead className="cursor-pointer" onClick={() => toggleSort("tipo")}>Tipo</TableHead>
                  <TableHead className="cursor-pointer" onClick={() => toggleSort("precio")}>Precio</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Acciones</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {paginated.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-8 text-sm text-muted-foreground">
                      No se encontraron resultados
                    </TableCell>
                  </TableRow>
                ) : (
                  paginated.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.nombre}</TableCell>
                      <TableCell>{item.tipo}</TableCell>
                      <TableCell>${item.precio.toLocaleString()}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.estado === "Disponible"
                            ? "bg-green-100 text-green-800"
                            : item.estado === "Reservado"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}>{item.estado}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0" aria-label="Editar">
                            <Edit3 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0" aria-label="Eliminar">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Mostrando <span className="font-medium">{(page - 1) * perPage + (paginated.length ? 1 : 0)}</span> - <span className="font-medium">{(page - 1) * perPage + paginated.length}</span> de <span className="font-medium">{total}</span>
            </p>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => setPage(Math.max(1, page - 1))} disabled={page === 1}>
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex items-center gap-1">
                {Array.from({ length: pages }).map((_, i) => (
                  <Button
                    key={i}
                    size="sm"
                    variant={page === i + 1 ? "default" : "ghost"}
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>

              <Button variant="ghost" size="sm" onClick={() => setPage(Math.min(pages, page + 1))} disabled={page === pages}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
