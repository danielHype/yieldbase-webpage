import { z } from 'zod';

type isAny<T> = [any extends T ? 'true' : 'false'] extends ['true'] ? true : false;
type nonoptional<T> = T extends undefined ? never : T;
type nonnullable<T> = T extends null ? never : T;
type equals<X, Y> = [X] extends [Y] ? ([Y] extends [X] ? true : false) : false;

export type toZodUpdated<T> = {
    any: never;
    optional: z.ZodOptional<toZodUpdated<nonoptional<T>>>;
    nullable: z.ZodNullable<toZodUpdated<nonnullable<T>>>;
    array: T extends Array<infer U> ? z.ZodArray<toZodUpdated<U>> | z.ZodDefault<z.ZodArray<toZodUpdated<U>>> : never;
    string: z.ZodString | z.ZodDefault<z.ZodString>;
    bigint: z.ZodBigInt | z.ZodDefault<z.ZodBigInt>;
    number: z.ZodNumber | z.ZodDefault<z.ZodNumber>;
    boolean: z.ZodBoolean | z.ZodDefault<z.ZodBoolean>;
    date: z.ZodDate | z.ZodDefault<z.ZodDate>;
    object: z.ZodObject<{ [k in keyof T]: toZodUpdated<T[k]> }>;

    rest: never;
}[zodKey<T>];

type zodKey<T> = isAny<T> extends true
    ? 'any'
    : equals<T, boolean> extends true //[T] extends [booleanUtil.Type]
    ? 'boolean'
    : [undefined] extends [T]
    ? 'optional'
    : [null] extends [T]
    ? 'nullable'
    : T extends any[]
    ? 'array'
    : equals<T, string> extends true
    ? 'string'
    : equals<T, bigint> extends true //[T] extends [bigintUtil.Type]
    ? 'bigint'
    : equals<T, number> extends true //[T] extends [numberUtil.Type]
    ? 'number'
    : equals<T, Date> extends true //[T] extends [dateUtil.Type]
    ? 'date'
    : T extends { [k: string]: any } //[T] extends [structUtil.Type]
    ? 'object'
    : 'rest';