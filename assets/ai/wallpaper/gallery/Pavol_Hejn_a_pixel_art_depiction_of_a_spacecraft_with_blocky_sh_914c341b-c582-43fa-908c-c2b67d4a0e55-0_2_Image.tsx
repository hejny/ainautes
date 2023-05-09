/**
 * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
 * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
 *    If you want to edit this file:
 *      - Change @generated to @not-generated
 *      - And remove this warning
 *    Then the file will not be re-generated automatically
 */

import Image from 'next/image';
import { Color } from '../../../../src/utils/color/Color';
import { IImageColorStats } from '../../../../src/utils/image/utils/IImageColorStats';
import { IWallpaperMetadata, IWallpaperComponentProps } from '../IWallpaperComponent';
import metadata from './Pavol_Hejn_a_pixel_art_depiction_of_a_spacecraft_with_blocky_sh_914c341b-c582-43fa-908c-c2b67d4a0e55-0_2.json';
import source from './Pavol_Hejn_a_pixel_art_depiction_of_a_spacecraft_with_blocky_sh_914c341b-c582-43fa-908c-c2b67d4a0e55-0_2.png';

/**
 * Image of A pixel art depiction of a spacecraft, with blocky shapes and limited colors creating a nostalgic and playful feel.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APixelArtDepictionOfASpacecraftWithBlockySh914c341bC58243fa908cC2b67d4a0e550_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A pixel art depiction of a spacecraft, with blocky shapes and limited colors creating a nostalgic and playful feel."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APixelArtDepictionOfASpacecraftWithBlockySh914c341bC58243fa908cC2b67d4a0e550_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APixelArtDepictionOfASpacecraftWithBlockySh914c341bC58243fa908cC2b67d4a0e550_2_Image.colorStats = {
    averageColor: Color.fromHex('#2f3943'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#dd1111'), Color.fromHex('#ccffff')],
    minmaxGreen: [Color.fromHex('#33aa88'), Color.fromHex('#dd1122')],
    minmaxBlue: [Color.fromHex('#445588'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#112233'),
    mostSaturatedColor: Color.fromHex('#002233'),
    mostGroupedColor: Color.fromHex('#112233'),
    bottom: {
        averageColor: Color.fromHex('#242d39'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#001100'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#dd1111'), Color.fromHex('#bbffee')],
        minmaxGreen: [Color.fromHex('#44aa88'), Color.fromHex('#dd1122')],
        minmaxBlue: [Color.fromHex('#445588'), Color.fromHex('#ffffaa')],
        mostFrequentColor: Color.fromHex('#112233'),
        mostSaturatedColor: Color.fromHex('#002222'),
        mostGroupedColor: Color.fromHex('#112233'),
    },
} satisfies IImageColorStats;
