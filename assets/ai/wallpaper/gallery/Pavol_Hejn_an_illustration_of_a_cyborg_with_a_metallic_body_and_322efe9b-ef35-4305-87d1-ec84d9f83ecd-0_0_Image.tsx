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
import metadata from './Pavol_Hejn_an_illustration_of_a_cyborg_with_a_metallic_body_and_322efe9b-ef35-4305-87d1-ec84d9f83ecd-0_0.json';
import source from './Pavol_Hejn_an_illustration_of_a_cyborg_with_a_metallic_body_and_322efe9b-ef35-4305-87d1-ec84d9f83ecd-0_0.png';

/**
 * Image of An illustration of a cyborg with a metallic body and glowing eyes
 *
 * @see https://www.midjourney.com/app/jobs/0
 * @generated by generate-wallpapers-library
 */
export function AnIllustrationOfACyborgWithAMetallicBodyAnd322efe9bEf35430587d1Ec84d9f83ecd0_0_Image(
    props: IWallpaperComponentProps,
) {
    const { width, quality } = props;

    return (
        <Image
            alt="An illustration of a cyborg with a metallic body and glowing eyes"
            src={source}
            draggable="false"
            placeholder="blur"
            height={Math.round((width / 1920) * 1080)}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            {...{ width, quality }}
        />
    );
}

AnIllustrationOfACyborgWithAMetallicBodyAnd322efe9bEf35430587d1Ec84d9f83ecd0_0_Image.metadata =
    metadata satisfies IWallpaperMetadata;
AnIllustrationOfACyborgWithAMetallicBodyAnd322efe9bEf35430587d1Ec84d9f83ecd0_0_Image.colorStats = {
    averageColor: Color.fromHex('#1e2528'),
    lightestColor: Color.fromHex('#ffffff'),
    darkestColor: Color.fromHex('#000000'),
    minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
    minmaxRed: [Color.fromHex('#772211'), Color.fromHex('#66ffff')],
    minmaxGreen: [Color.fromHex('#449988'), Color.fromHex('#ffeeff')],
    minmaxBlue: [Color.fromHex('#115599'), Color.fromHex('#ffee11')],
    mostFrequentColor: Color.fromHex('#000000'),
    mostSaturatedColor: Color.fromHex('#110000'),
    mostGroupedColor: Color.fromHex('#000000'),
    bottom: {
        averageColor: Color.fromHex('#29353a'),
        lightestColor: Color.fromHex('#ffffff'),
        darkestColor: Color.fromHex('#000000'),
        minmaxWhite: [Color.fromHex('#ffffff'), Color.fromHex('#000000')],
        minmaxRed: [Color.fromHex('#995511'), Color.fromHex('#77ffff')],
        minmaxGreen: [Color.fromHex('#449988'), Color.fromHex('#ffffff')],
        minmaxBlue: [Color.fromHex('#115599'), Color.fromHex('#ffffee')],
        mostFrequentColor: Color.fromHex('#000000'),
        mostSaturatedColor: Color.fromHex('#110000'),
        mostGroupedColor: Color.fromHex('#000000'),
    },
} satisfies IImageColorStats;