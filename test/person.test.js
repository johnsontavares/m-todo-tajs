import { describe, expect, it, jest } from "@jest/globals"
import Person from "../src/person.js"

describe("#Person Suite", () => {

    describe("#validate", () => {


        it('should throw if the name is not present', () => {

            // mock é a entrada necessária para que o teste funcione

            const mockInvalidPerson = {
                name: '',
                cpf: ''
            }

           expect(() => Person.validate(mockInvalidPerson)).toThrow(new Error("name is required"))

        })

        it('should throw if the cpf is not present', () => {
        // mock é a entrada necessária para que o teste funcione
        
            const mockInvalidPerson = {
                name: 'sadfasdfsadfs',
                cpf: ''
            }
            expect(() => Person.validate(mockInvalidPerson)).toThrow(new Error("cpf is required"))
        
                })


            it('should not throw person is valid', () => {
                // mock é a entrada necessária para que o teste funcione
                
                    const mockInvalidPerson = {
                        name: 'sadfasdfsadfs',
                        cpf: '123123123'
                    }
                    expect(() => Person.validate(mockInvalidPerson)).not.toThrow(new Error("cpf is required"))
                
                        })

                it('should not throw person is valid', () => {
                    // mock é a entrada necessária para que o teste funcione
                    
                        const mockInvalidPerson = {
                            name: 'sadfasdfsadfs',
                            cpf: '123123123'
                        }
                        expect(() => Person.validate(mockInvalidPerson)).not.toThrow(new Error("cpf is required"))
                    
                            })


    })

    describe("#format", () => {

        it('should format the person name and CPF', () => {

            /// AAA
            // Arrange: Prepara 
            // Act : Executar
            // Assert : Validar

            const mockPerson = {
                name: "Johnson Tavares",
                cpf: "016.504.452-70"
            }

            const formattedPerson = Person.format(mockPerson)

            console.log("formattedPerson", formattedPerson)
            console.log("mockPerson", mockPerson)


            const expected = {
                "name": "Johnson",
                "cpf" : "016.504.452-70",
                "lastName": "Tavares"
            }
            
            expect(formattedPerson).toStrictEqual(expected);

        })
    })

    describe('#process', () => {
        it("should process a valid person", () => {

            const mockPerson = {
                name: "johnson tavares",
                cpf: "016.504.452-70"
            }

            jest
            .spyOn(
                Person, 
                Person.validate.name
            ).mockReturnValue()


            jest
                .spyOn(
                    Person, 
                    Person.format.name
                ).mockReturnValue({
                    name: "johnson",
                    cpf: "016.504.452-70",
                    lastName: "tavares"
                })

           const result = Person.process(mockPerson)
           // Assert
           const expected = "ok"
           expect(result).toStrictEqual(expected)

        })
    })

})
