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
import metadata from './Pavol_Hejn_a_digital_landscape_with_geometric_shapes_and_neon_c_49190ae3-8e49-4799-a49c-2b29311d1d3d-0_3.json';
import source from './Pavol_Hejn_a_digital_landscape_with_geometric_shapes_and_neon_c_49190ae3-8e49-4799-a49c-2b29311d1d3d-0_3.png';

/**
 * Image of A digital landscape with geometric shapes and neon colors
 *
 * @see https://www.midjourney.com/app/jobs/3
 * @generated by generate-wallpapers-library
 */
export function ADigitalLandscapeWithGeometricShapesAndNeonC49190ae38e494799A49c2b29311d1d3d0_3_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="A digital landscape with geometric shapes and neon colors"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ADigitalLandscapeWithGeometricShapesAndNeonC49190ae38e494799A49c2b29311d1d3d0_3_Image.metadata =
    metadata satisfies IWallpaperMetadata;
ADigitalLandscapeWithGeometricShapesAndNeonC49190ae38e494799A49c2b29311d1d3d0_3_Image.colorStats = {
    averageColor: Color.fromHex('#4f2540'),
    lightestColor: Color.fromHex('#dd55ff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#eeffcc'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#ff1100'), Color.fromHex('#00aaee')],
    minmaxGreen: [Color.fromHex('#55aa66'), Color.fromHex('#ff00bb')],
    minmaxBlue: [Color.fromHex('#1122cc'), Color.fromHex('#ffee88')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#440033'),
    mostGroupedColor: Color.fromHex('#000011'),
    bottom: {
        averageColor: Color.fromHex('#281219'),
        lightestColor: Color.fromHex('#dd55ff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#eeffcc'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#ee0022'), Color.fromHex('#eeffcc')],
        minmaxGreen: [Color.fromHex('#55aa66'), Color.fromHex('#ee11ee')],
        minmaxBlue: [Color.fromHex('#1122cc'), Color.fromHex('#ffee99')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#220022'),
        mostGroupedColor: Color.fromHex('#000011'),
    },
} satisfies IImageColorStats;