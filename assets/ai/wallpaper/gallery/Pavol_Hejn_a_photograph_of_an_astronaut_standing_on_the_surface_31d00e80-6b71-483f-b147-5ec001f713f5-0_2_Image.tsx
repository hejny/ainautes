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
import metadata from './Pavol_Hejn_a_photograph_of_an_astronaut_standing_on_the_surface_31d00e80-6b71-483f-b147-5ec001f713f5-0_2.json';
import source from './Pavol_Hejn_a_photograph_of_an_astronaut_standing_on_the_surface_31d00e80-6b71-483f-b147-5ec001f713f5-0_2.png';

/**
 * Image of A photograph of an astronaut standing on the surface of the moon with Earth in the background.
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function APhotographOfAnAstronautStandingOnTheSurface31d00e806b71483fB1475ec001f713f50_2_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A photograph of an astronaut standing on the surface of the moon with Earth in the background."
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

APhotographOfAnAstronautStandingOnTheSurface31d00e806b71483fB1475ec001f713f50_2_Image.metadata =
    metadata satisfies IWallpaperMetadata;
APhotographOfAnAstronautStandingOnTheSurface31d00e806b71483fB1475ec001f713f50_2_Image.colorStats = {
    averageColor: Color.fromHex('#212427'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb5555'), Color.fromHex('#eeffff')],
    minmaxGreen: [Color.fromHex('#667755'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#223355'), Color.fromHex('#ffffee')],
    mostFrequentColor: Color.fromHex('#111111'),
    mostSaturatedColor: Color.fromHex('#110011'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#3a3937'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#554433'), Color.fromHex('#eeffff')],
        minmaxGreen: [Color.fromHex('#889977'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#111111'),
        mostSaturatedColor: Color.fromHex('#110011'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;
