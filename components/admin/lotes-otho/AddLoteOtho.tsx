import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Modal from "@/components/ui/Modal";

export default function AddLotesOtho() {
    return (
        <Modal
            buttonText='Agregar Nuevo Lote'
            title='Nuevo Registro'
            description='Agrega un nuevo lote para Otho Yucatán'
        >
            <form
                action=""
                className='space-y-3'
            >
                <div className="grid gap-3">
                    <Label htmlFor="username-1">Ubicación</Label>
                    <Input id="username-1" name="username" />
                </div>

                <div className="w-full grid gap-3">
                    <Label htmlFor="username-1">Zona</Label>
                    <Input id="username-1" name="username" />
                </div>

                <div className='flex flex-col md:flex-row gap-3'>
                    <div className="w-full grid gap-3">
                        <Label htmlFor="username-1">Lote</Label>
                        <Input id="username-1" name="username" />
                    </div>

                    <div className="w-full grid gap-3">
                        <Label htmlFor="username-1">M²</Label>
                        <Input id="username-1" name="username" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row gap-3'>
                    <div className="w-full grid gap-3">
                        <Label htmlFor="username-1">Precio M² Normal</Label>
                        <Input id="username-1" name="username" />
                    </div>

                    <div className="w-full grid gap-3">
                        <Label htmlFor="username-1">Precio total</Label>
                        <Input id="username-1" name="username" />
                    </div>
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="username-1">Comisión</Label>
                    <Input id="username-1" name="username" />
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="username-1">Comentarios</Label>
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
