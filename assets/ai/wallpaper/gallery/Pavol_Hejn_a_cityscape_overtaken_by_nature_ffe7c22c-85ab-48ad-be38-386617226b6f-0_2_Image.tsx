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
import metadata from './Pavol_Hejn_a_cityscape_overtaken_by_nature_ffe7c22c-85ab-48ad-be38-386617226b6f-0_2.json';
import source from './Pavol_Hejn_a_cityscape_overtaken_by_nature_ffe7c22c-85ab-48ad-be38-386617226b6f-0_2.png';

/**
 * Image of A cityscape overtaken by nature
 *
 * @see https://www.midjourney.com/app/jobs/2
 * @generated by generate-wallpapers-library
 */
export function ACityscapeOvertakenByNatureFfe7c22c85ab48adBe38386617226b6f0_2_Image(props: IWallpaperComponentProps) {
    const { width, quality } = props;

    return (
        <Image
            alt="A cityscape overtaken by nature"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

ACityscapeOvertakenByNatureFfe7c22c85ab48adBe38386617226b6f0_2_Image.metadata = metadata satisfies IWallpaperMetadata;
ACityscapeOvertakenByNatureFfe7c22c85ab48adBe38386617226b6f0_2_Image.colorStats = {
    averageColor: Color.fromHex('#4c4c3b'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#001100'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#aa4422'), Color.fromHex('#ffffff')],
    minmaxGreen: [Color.fromHex('#779933'), Color.fromHex('#ffffff')],
    minmaxBlue: [Color.fromHex('#445566'), Color.fromHex('#ffee44')],
    mostFrequentColor: Color.fromHex('#111111'),
    mostSaturatedColor: Color.fromHex('#002222'),
    mostGroupedColor: Color.fromHex('#111111'),
    bottom: {
        averageColor: Color.fromHex('#232713'),
        lightestColor: Color.fromHex('#ffffdd'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffdd'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#aa4422'), Color.fromHex('#ffffdd')],
        minmaxGreen: [Color.fromHex('#779933'), Color.fromHex('#ffeedd')],
        minmaxBlue: [Color.fromHex('#555566'), Color.fromHex('#ffee44')],
        mostFrequentColor: Color.fromHex('#111111'),
        mostSaturatedColor: Color.fromHex('#001100'),
        mostGroupedColor: Color.fromHex('#111111'),
    },
} satisfies IImageColorStats;
