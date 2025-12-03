import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Modal from "@/components/ui/Modal";

export default function AddCasaModal() {
    return (
        <Modal
            buttonText='Agregar Nueva Casa'
            title='Nuevo Registro'
            description='Agrega una nueva casa de entrega inmediata'
        >
            <form
                action=""
                className='space-y-3'
            >
                <div className="grid gap-3">
                    <Label htmlFor="username-1">Nombre</Label>
                    <Input id="username-1" name="username" />
                </div>

                <div className='flex flex-col md:flex-row gap-3'>
                    <div className="w-full grid gap-3">
                        <Label htmlFor="username-1">Habitaciones</Label>
                        <Input id="username-1" name="username" />
                    </div>

                    <div className="w-full grid gap-3">
                        <Label htmlFor="username-1">Baños</Label>
                        <Input id="username-1" name="username" />
                    </div>

                    <div className="w-full grid gap-3">
                        <Label htmlFor="username-1">Autos</Label>
                        <Input id="username-1" name="username" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-3'>
                    <div className="w-full grid gap-3">
                        <Label htmlFor="username-1">Costo</Label>
                        <Input id="username-1" name="username" />
                    </div>

                    <div className="w-full grid gap-3">
                        <Label htmlFor="username-1">Status</Label>
                        <Input id="username-1" name="username" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-3'>
                    <div className="w-full grid gap-3">
                        <Label htmlFor="username-1">M² sup</Label>
                        <Input id="username-1" name="username" />
                    </div>

                    <div className="w-full grid gap-3">
                        <Label htmlFor="username-1">M² const</Label>
                        <Input id="username-1" name="username" />
                    </div>

                    <div className="w-full grid gap-3">
                        <Label htmlFor="username-1">Comisión</Label>
                        <Input id="username-1" name="username" />
                    </div>
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="username-1">Comentarios</Label>
                    <Input id="username-1" name="username" />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="username-1">Link</Label>
                    <Input id="username-1" name="username" />
                </div>

                <div className="flex flex-col md:flex-row gap-2 mt-6">
                    <div className="w-full">
                        <DialogClose asChild>
                            <Button variant="outline" className="w-full bg-gray-100 cursor-pointer">Cancelar</Button>
                        </DialogClose>
                    </div>

                    <div className='w-full'>
                        <Button
                            type="submit"
                            className='w-full bg-yellow-950 hover:bg-yellow-900 transition-colors duration-300 cursor-pointer'
                        >
                            Guardar datos
                        </Button>
                    </div>
                </div>

            </form>
        </Modal>
    )
}
