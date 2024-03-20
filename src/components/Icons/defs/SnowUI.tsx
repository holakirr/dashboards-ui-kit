import type { CustomIconWeights } from "..";

export const SnowUIWeights: CustomIconWeights = new Map([
	[
		"regular",
		<path d="M16.6972 3.69806C16.6972 3.31253 16.384 3 15.9978 3C15.6115 3 15.2984 3.31253 15.2984 3.69806V7.71769C15.2984 7.92159 15.0513 8.02371 14.9069 7.87953L12.8485 5.82506C12.5753 5.55245 12.1325 5.55245 11.8593 5.82506C11.5862 6.09767 11.5862 6.53966 11.8593 6.81227L14.8954 9.84245C15.1534 10.1 15.2984 10.4493 15.2984 10.8135V14.3906C15.2984 14.5668 15.1073 14.6769 14.9544 14.5888L11.8406 12.7945C11.5245 12.6124 11.294 12.3125 11.1995 11.9607L10.0882 7.8214C9.98827 7.449 9.60475 7.22801 9.23164 7.32779C8.85853 7.42757 8.63711 7.81035 8.73708 8.18274L9.49052 10.9892C9.5434 11.1862 9.33129 11.3486 9.15436 11.2467L5.67647 9.24256C5.34195 9.04979 4.9142 9.16419 4.72106 9.49807C4.52792 9.83194 4.64254 10.2589 4.97706 10.4516L8.45883 12.458C8.63575 12.5599 8.60086 12.8245 8.40352 12.8772L5.58553 13.6309C5.21242 13.7307 4.991 14.1134 5.09097 14.4858C5.19095 14.8582 5.57446 15.0792 5.94757 14.9794L10.101 13.8687C10.4535 13.7744 10.829 13.8238 11.145 14.0059L14.2572 15.7992C14.4101 15.8873 14.4101 16.1075 14.2572 16.1956L11.1389 17.9925C10.8229 18.1746 10.4473 18.224 10.0949 18.1297L5.94757 17.0206C5.57446 16.9208 5.19095 17.1418 5.09097 17.5142C4.991 17.8866 5.21242 18.2693 5.58553 18.3691L8.3974 19.1211C8.59474 19.1739 8.62964 19.4384 8.45271 19.5404L4.97482 21.5445C4.6403 21.7373 4.52568 22.1642 4.71882 22.4981C4.91196 22.8319 5.33971 22.9463 5.67423 22.7536L9.156 20.7472C9.33293 20.6453 9.54504 20.8077 9.49216 21.0047L8.73708 23.8173C8.63711 24.1897 8.85853 24.5724 9.23164 24.6722C9.60475 24.772 9.98827 24.551 10.0882 24.1786L11.2011 20.0332C11.2956 19.6814 11.5262 19.3815 11.8422 19.1994L14.9544 17.406C15.1073 17.3179 15.2984 17.428 15.2984 17.6042V21.198C15.2984 21.5622 15.1534 21.9115 14.8954 22.169L11.8593 25.1992C11.5862 25.4718 11.5862 25.9138 11.8593 26.1864C12.1325 26.459 12.5753 26.459 12.8485 26.1864L14.9069 24.1319C15.0513 23.9877 15.2984 24.0899 15.2984 24.2938V28.3019C15.2984 28.6875 15.6115 29 15.9978 29C16.384 29 16.6972 28.6875 16.6972 28.3019V24.2893C16.6972 24.0854 16.9442 23.9833 17.0886 24.1274L19.1516 26.1864C19.4247 26.459 19.8675 26.459 20.1407 26.1864C20.4138 25.9138 20.4138 25.4718 20.1407 25.1992L17.1002 22.1645C16.8421 21.907 16.6972 21.5577 16.6972 21.1935V17.6016C16.6972 17.4254 16.8883 17.3153 17.0411 17.4034L20.1479 19.1936C20.4639 19.3757 20.6945 19.6757 20.7889 20.0275L21.9018 24.1729C22.0018 24.5453 22.3853 24.7663 22.7584 24.6665C23.1316 24.5667 23.353 24.1839 23.253 23.8115L22.4979 20.999C22.445 20.802 22.6572 20.6396 22.8341 20.7415L26.3258 22.7536C26.6603 22.9463 27.088 22.8319 27.2812 22.4981C27.4743 22.1642 27.3597 21.7373 27.0252 21.5445L23.5374 19.5347C23.3604 19.4327 23.3953 19.1682 23.5927 19.1154L26.4046 18.3634C26.7777 18.2636 26.9991 17.8809 26.8991 17.5085C26.7991 17.1361 26.4156 16.9151 26.0425 17.0149L21.8952 18.124C21.5427 18.2182 21.1672 18.1689 20.8512 17.9868L17.7428 16.1956C17.5899 16.1075 17.5899 15.8873 17.7428 15.7992L20.845 14.0116C21.1611 13.8295 21.5366 13.7801 21.8891 13.8744L26.0425 14.9851C26.4156 15.0849 26.7991 14.8639 26.8991 14.4915C26.9991 14.1192 26.7777 13.7364 26.4046 13.6366L23.5866 12.883C23.3892 12.8302 23.3543 12.5656 23.5312 12.4637L27.0229 10.4516C27.3575 10.2589 27.4721 9.83194 27.2789 9.49807C27.0858 9.16419 26.6581 9.04979 26.3235 9.24256L22.8357 11.2524C22.6588 11.3543 22.4467 11.1919 22.4996 10.9949L23.253 8.18846C23.353 7.81607 23.1316 7.4333 22.7584 7.33351C22.3853 7.23373 22.0018 7.45473 21.9018 7.82712L20.7906 11.9664C20.6961 12.3182 20.4655 12.6182 20.1495 12.8003L17.0411 14.5914C16.8883 14.6795 16.6972 14.5694 16.6972 14.3932V10.8179C16.6972 10.4537 16.8421 10.1044 17.1002 9.84692L20.1407 6.81227C20.4138 6.53966 20.4138 6.09767 20.1407 5.82506C19.8675 5.55245 19.4247 5.55245 19.1516 5.82506L17.0886 7.88399C16.9442 8.02818 16.6972 7.92606 16.6972 7.72216V3.69806Z" />,
	],
]);
