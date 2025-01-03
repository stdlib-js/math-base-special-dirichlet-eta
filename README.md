<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Dirichlet Eta Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Dirichlet eta][eta-function] function.

<section class="intro">

The [Dirichlet eta][eta-function] function is defined by the [Dirichlet series][dirichlet-series]

<!-- <equation class="equation" label="eq:dirichlet_eta_function" align="center" raw="\eta(s) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^s} = \frac{1}{1^s} - \frac{1}{2^s} + \frac{1}{3^s} - \frac{1}{4^s} + \cdots" alt="Dirichlet eta function"> -->

```math
\eta(s) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^s} = \frac{1}{1^s} - \frac{1}{2^s} + \frac{1}{3^s} - \frac{1}{4^s} + \cdots
```

<!-- <div class="equation" align="center" data-raw-text="\eta(s) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n^s} = \frac{1}{1^s} - \frac{1}{2^s} + \frac{1}{3^s} - \frac{1}{4^s} + \cdots" data-equation="eq:dirichlet_eta_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/math/base/special/dirichlet-eta/docs/img/equation_dirichlet_eta_function.svg" alt="Dirichlet eta function">
    <br>
</div> -->

<!-- </equation> -->

where `s` is a complex variable equal to `σ + ti`. The series is convergent for all complex numbers having a real part greater than `0`.

Note that the [Dirichlet eta][eta-function] function is also known as the **alternating zeta function** and denoted `ζ*(s)`. The series is an alternating sum corresponding to the Dirichlet series expansion of the [Riemann zeta][@stdlib/math/base/special/riemann-zeta] function. Accordingly, the following relation holds:

<!-- <equation class="equation" label="eq:dirichlet_riemann_relation" align="center" raw="\eta(s) = (1-2^{1-s})\zeta(s)" alt="Dirichlet-Riemann zeta relation"> -->

```math
\eta(s) = (1-2^{1-s})\zeta(s)
```

<!-- <div class="equation" align="center" data-raw-text="\eta(s) = (1-2^{1-s})\zeta(s)" data-equation="eq:dirichlet_riemann_relation">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/dirichlet-eta/docs/img/equation_dirichlet_riemann_relation.svg" alt="Dirichlet-Riemann zeta relation">
    <br>
</div> -->

<!-- </equation> -->

where `ζ(s)` is the [Riemann zeta][@stdlib/math/base/special/riemann-zeta] function.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-dirichlet-eta
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var eta = require( '@stdlib/math-base-special-dirichlet-eta' );
```

#### eta( s )

Evaluates the Dirichlet eta function for a double-precision floating-point number `s`.

```javascript
var v = eta( 0.0 ); // Abel sum of 1-1+1-1+...
// returns 0.5

v = eta( -1.0 ); // Abel sum of 1-2+3-4+...
// returns 0.25

v = eta( 1.0 ); // alternating harmonic series => ln(2)
// returns 0.6931471805599453

v = eta( 3.14 );
// returns ~0.9096

v = eta( NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var eta = require( '@stdlib/math-base-special-dirichlet-eta' );

var s = linspace( -50.0, 50.0, 200 );

var i;
for ( i = 0; i < s.length; i++ ) {
    console.log( 's: %d, η(s): %d', s[ i ], eta( s[ i ] ) );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/dirichlet_eta.h"
```

#### stdlib_base_eta( s )

Evaluates the Dirichlet eta function for a double-precision floating-point number `s`.

```c
double y = stdlib_base_eta( 0.0 );
// returns 0.5
```

The function accepts the following arguments:

-   **s**: `[in] double` input value.

```c
double stdlib_base_eta( const double s );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/dirichlet_eta.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { 45.0, 90.0, 0.0, 0.0 / 0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_eta( x[ i ] );
        printf( "η(%lf) = %lf\n", x[ i ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-dirichlet-eta.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-dirichlet-eta

[test-image]: https://github.com/stdlib-js/math-base-special-dirichlet-eta/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-dirichlet-eta/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-dirichlet-eta/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-dirichlet-eta?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-dirichlet-eta.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-dirichlet-eta/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-dirichlet-eta/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-dirichlet-eta/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-dirichlet-eta/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-dirichlet-eta/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-dirichlet-eta/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-dirichlet-eta/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-dirichlet-eta/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-dirichlet-eta/main/LICENSE

[eta-function]: https://en.wikipedia.org/wiki/Dirichlet_eta_function

[dirichlet-series]: https://en.wikipedia.org/wiki/Dirichlet_series

[@stdlib/math/base/special/riemann-zeta]: https://github.com/stdlib-js/math-base-special-riemann-zeta

</section>

<!-- /.links -->
