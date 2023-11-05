/**
 * Remap the properties of an object type based on a mapping specification.
 *
 * @example
 * type APIExampleAttributes = {
 *   name: string;
 *   some_field: "bar" | undefined;
 * }
 *
 * type ExampleAttributes = Remap<APIExampleAttributes, {
 *   some_field: "someField";
 * }>
 *
 *  expected type:
 *  type ExampleAttributes = {
 *    name: string;
 *    someField: "bar" | undefined;
 *  }
 */
export type Remap<TType, TMap extends Record<PropertyKey, PropertyKey>> = {
 [Property in keyof TType as Property extends keyof TMap ? TMap[Property] : Property]: TType[Property];
};
