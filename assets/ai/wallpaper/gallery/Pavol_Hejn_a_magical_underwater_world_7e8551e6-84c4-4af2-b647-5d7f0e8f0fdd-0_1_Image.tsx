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
import metadata from './Pavol_Hejn_a_magical_underwater_world_7e8551e6-84c4-4af2-b647-5d7f0e8f0fdd-0_1.json';
import source from './Pavol_Hejn_a_magical_underwater_world_7e8551e6-84c4-4af2-b647-5d7f0e8f0fdd-0_1.png';

/**
 * Image of A magical underwater world
 *
 * @see https://www.midjourney.com/app/jobs/1
 * @generated by generate-wallpapers-library
 */
export function AMagicalUnderwaterWorld7e8551e684c44af2B6475d7f0e8f0fdd0_1_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A magical underwater world"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AMagicalUnderwaterWorld7e8551e684c44af2B6475d7f0e8f0fdd0_1_Image.metadata = metadata satisfies IWallpaperMetadata;
AMagicalUnderwaterWorld7e8551e684c44af2B6475d7f0e8f0fdd0_1_Image.colorStats = {
    averageColor: Color.fromHex('#263a3d'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#bb2200'), Color.fromHex('#55ffff')],
    minmaxGreen: [Color.fromHex('#55aa77'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#335599'), Color.fromHex('#ffffaa')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#000011'),
    mostGroupedColor: Color.fromHex('#002233'),
    bottom: {
        averageColor: Color.fromHex('#332723'),
        lightestColor: Color.fromHex('#ffffee'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffee'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa3311'), Color.fromHex('#ddffee')],
        minmaxGreen: [Color.fromHex('#778844'), Color.fromHex('#ffffee')],
        minmaxBlue: [Color.fromHex('#335599'), Color.fromHex('#ffffcc')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#111100'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
