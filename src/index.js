import vendor from '../vendor/dist';

export function bar() {
    return vendor.foo() + 1;
}