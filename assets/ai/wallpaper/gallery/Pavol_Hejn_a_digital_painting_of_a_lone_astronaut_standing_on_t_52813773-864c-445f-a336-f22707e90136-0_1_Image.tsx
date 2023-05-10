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
import metadata from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_52813773-864c-445f-a336-f22707e90136-0_1.json';
import source from './Pavol_Hejn_a_digital_painting_of_a_lone_astronaut_standing_on_t_52813773-864c-445f-a336-f22707e90136-0_1.png';

/**
 * Image of A digital painting of a lone astronaut standing on the edge of a crater, gazing out at the endless expanse of space.
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function ADigitalPaintingOfALoneAstronautStandingOnT52813773864c445fA336F22707e901360_1_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital painting of a lone astronaut standing on the edge of a crater, gazing out at the endless expanse of space."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalPaintingOfALoneAstronautStandingOnT52813773864c445fA336F22707e901360_1_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalPaintingOfALoneAstronautStandingOnT52813773864c445fA336F22707e901360_1_Image.colorStats = {
    averageColor: Color.fromHex('#7d6961'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#994422'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#556644'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#224477'), Color.fromHex('#ffffdd')],
    mostFrequentColor: Color.fromHex('#221111'),
    mostSaturatedColor: Color.fromHex('#221100'),
    mostGroupedColor: Color.fromHex('#333344'),
    bottom: {
        averageColor: Color.fromHex('#533a36'),
        lightestColor: Color.fromHex('#bbbbcc'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeccbb'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#994422'), Color.fromHex('#bbccbb')],
        minmaxGreen: [Color.fromHex('#447777'), Color.fromHex('#220000')],
        minmaxBlue: [Color.fromHex('#223366'), Color.fromHex('#ffcc99')],
        mostFrequentColor: Color.fromHex('#221111'),
        mostSaturatedColor: Color.fromHex('#221100'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;