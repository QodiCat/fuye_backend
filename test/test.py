# import json
#
# from sqlalchemy.sql.functions import current_timestamp
#
# import requests
# import hashlib
# import time
# import json
#
# #
# def md5(s):
#     s = s.encode("utf8")
#     m = hashlib.md5()
#     m.update(s)
#     return m.hexdigest()
#
#
# url = "https://meta.guiji.ai"
# AccessKey = "69wCg6iKHMGlcULLGahXIQT3"
# Secretkey = "XfYmmoZTbBOR3PPThzdpk6XKMgz8hSUMvnMBM2UtEKI9lVRfw8KLynloXo72Amjo"
#
# current_time = int(round(time.time() * 1000))
#
# header = {
#     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0",
#     "Cookie": "BAIDUID=BE6D365BFB0B9325ACC24F2F3A743A3D:FG=1; BIDUPSID=BE6D365BFB0B9325ACC24F2F3A743A3D; PSTM=1730189141; BAIDUID_BFESS=BE6D365BFB0B9325ACC24F2F3A743A3D:FG=1; BD_UPN=12314753; BDORZ=FFFB88E999055A3F8A630C64834BD6D0; H_PS_PSSID=61027_61055_61079_60853_61127_61113_61141_61158_61216_61207_61212_61208_61215; plus_cv=1::m:0ae33561; H_PS_645EC=69daccSXfmdLvSMODgNi7MZUd4dRMhsL8tjjkNhQaVyO%2BjPuG7GBy8PYl7H6ozZKBQ; BDRCVFR[7lG8H8cH5k_]=mk3SLVN4HKm; BD_HOME=1; BA_HECTOR=8480al242g8lalahak2g2hal30nmfl1jjudum1v; H_WISE_SIDS=110085_307086_1992049_624023_607028_625577_623878_623875_625785_625971_626068_1991790_626545_626724_626776_626906_626988_627136_626981_1991948_627286_625250_627456_627483_627634_624663_614026_627745_628198_623990_628157_628258_628304_628538_628541_628540_626999_628557_628759_628772_628848_628763_627317_628902_628888_628897_628884_629015_629020_628942_628925_626070_629133_629293_629297_629384_629495_629655_628797_629667_629009_629659_629824_629770_629877_629826_629966_629899_630012_629819_627851_630115_630110_630112_630104_630028_630024_630033_630192_630196_629038_630280_630316_625020_630172_622875_630145_628131_627702_630352_625312_630495_624517_630526_630505_628194_630556_630649_628904_630488_630484_630513_617672_8000001_8000062_8000131_8000140_8000149_8000156_8000164_8000169_8000177_8000185_8000188_8000196; H_WISE_SIDS_BFESS=110085_307086_1992049_624023_607028_625577_623878_623875_625785_625971_626068_1991790_626545_626724_626776_626906_626988_627136_626981_1991948_627286_625250_627456_627483_627634_624663_614026_627745_628198_623990_628157_628258_628304_628538_628541_628540_626999_628557_628759_628772_628848_628763_627317_628902_628888_628897_628884_629015_629020_628942_628925_626070_629133_629293_629297_629384_629495_629655_628797_629667_629009_629659_629824_629770_629877_629826_629966_629899_630012_629819_627851_630115_630110_630112_630104_630028_630024_630033_630192_630196_629038_630280_630316_625020_630172_622875_630145_628131_627702_630352_625312_630495_624517_630526_630505_628194_630556_630649_628904_630488_630484_630513_617672_8000001_8000062_8000131_8000140_8000149_8000156_8000164_8000169_8000177_8000185_8000188_8000196; plus_lsv=d8c5c220cc7029dd; Hm_lvt_12423ecbc0e2ca965d84259063d35238=1732181778,1732196409; HMACCOUNT=07BF1A9AEB4DF8DF; SE_LAUNCH=5%3A28869940_0%3A28869940; ZFY=BuJ3R8g:Blq6ILUYsQerkXoNrSUj4DFX9GIAyMmuOl5M:C; rsv_i=7c50S3WCsMH2jkzve+NhSm6pz4TqLLmDiVFh18I58CI0CeDtp5WYmHT2rNuIEtzI4q7vnlUoKJ/lY3Qa4hjNFtlvA7qZYz0; Hm_lpvt_12423ecbc0e2ca965d84259063d35238=1732196714"
# }
# # params 是查询参数，针对 GET 请求
#
#
#
# param = {
#     "appId": "69wCg6iKHMGlcULLGahXIQT3",
#     "grant_type": "sign",
#     "timestamp": str(current_timestamp),
#     "sign": str(md5(AccessKey + str(current_timestamp) + Secretkey))
# }
# # data 是查询参数，针对 POST 请求 -> 请求体
# data = {
#
# }
#
#
#
# request = requests.get("https://meta.guiji.ai/openapi/oauth/token", params=param)
# response_content = request.content
#
#
#
# print(response_content)
#
#
#

import os
import time


def get_file_list(directory):
    try:
        # 获取目录下的所有文件和文件夹
        files = os.listdir(directory)
        # 过滤只保留文件
        file_list = [f for f in files if os.path.isfile(os.path.join(directory, f))]
        return file_list
    except Exception as e:
        print(f"Error reading directory: {e}")
        return []


if __name__ == '__main__':
    print(int(time.time()))