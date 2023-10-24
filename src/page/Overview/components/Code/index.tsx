import { ContainerCode } from "./style";

export function Code() {
    return (
        <ContainerCode>
            <p>
                let foo = 42;   // foo is now a number
                foo = ‘bar’;    // foo is now a string
                foo = true;     // foo is now a boolean
            </p>
        </ContainerCode>
    )
}