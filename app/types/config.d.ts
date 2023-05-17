/**
 * @file config.d.ts
 * @author James Bennion-Pedley
 * @brief Schema for bojit.docs.config.js
 * @date 12/04/2023
 *
 * @copyright Copyright (c) 2023
 *
 */

/*-------------------------------- Imports -----------------------------------*/

/*------------------------------ Internal Types ------------------------------*/

// Theme
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

type Font = {
    name: string,
    url?: URL,
};

/*------------------------------- Primary Type -------------------------------*/

type Config = {
    root: string,   // Path to root of Docs directory,
    packages?: string[], // Perhaps handle through package.json
    theme?: {
        colours? : {
            primary: Color,
            secondary: Color,
        }
        font?: {
            headings: Font,
            body: Font,
            monospace: Font,
        }
    },
    links: {
        source: URL,
        logo?: URL,
        logoPath?: URL,
    }
};

/*-------------------------------- Exports -----------------------------------*/

export type { Config };
