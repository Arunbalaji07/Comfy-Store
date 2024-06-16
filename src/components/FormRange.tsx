import { useState } from "react";

import { formatAsDollars } from "@/utils";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

type FormRangeProps = {
    name: string;
    defaultValue?: string;
    label?: string;
};

const FormRange = ({ name, label, defaultValue }: FormRangeProps) => {
    const step = 1000;
    const maxPrice = 100000;
    const defaultPrice = defaultValue ? Number(defaultValue) : maxPrice;

    const [selectedPrice, setSelectedPrice] = useState(defaultPrice);

    return (
        <div className="mb-2">
            <Label htmlFor={name} className="capitalize flex justify-between">
                {label || name}
                <span>{formatAsDollars(selectedPrice)}</span>
            </Label>
            <Slider
                id={name}
                name={name}
                step={step}
                max={maxPrice}
                value={[selectedPrice]}
                onValueChange={(value) => setSelectedPrice(value[0])}
                className="mt-4"
            />
        </div>
    );
};
export default FormRange;
