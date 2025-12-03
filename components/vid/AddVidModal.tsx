import React from 'react'
import Modal from '../ui/Modal'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { DialogClose } from '../ui/dialog'
import { Button } from '../ui/button'

export default function AddVidModal() {
    return (
        <Modal
            buttonText='Agregar Nuevo Lote'
            title='Nuevo Registro'
            description='Agrega un nuevo lote para fracc la Vid residencial Cuautlancingo'
        >
            <form
                action=""
                className='space-y-3'
            >
                <div className="grid gap-3">
                    <Label htmlFor="username-1">Calle</Label>
                    <Input id="username-1" name="username" />
                </div>

                <div className='flex flex-col md:flex-row gap-3'>
                    <div className="w-full grid gap-3">
                        <Label htmlFor="username-1">Manzana</Label>
                        <Input id="username-1" name="username" />
                    </div>

                    <div className="w-full grid gap-3">
                        <Label htmlFor="username-1">Lote</Label>
                        <Input id="username-1" name="username" />
                    </div>
                </div>

                <div className="grid gap-3">
                    <Label htmlFor="username-1">Medidas</Label>
                    <Input id="username-1" name="username" />
                </div>

                <div className='flex flex-col md:flex-row gap-3'>
                    <div className="w-full grid gap-3">
                        <Label htmlFor="username-1">M2 totales</Label>
                        <Input id="username-1" name="username" />
                    </div>

                    <div className="w-full grid gap-3">
                        <Label htmlFor="username-1">Precio lote</Label>
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
