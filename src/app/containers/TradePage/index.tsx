import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Text, Flex, Box } from 'rebass/styled-components';
import styled from 'styled-components';

import { Button } from 'app/components/Button';
import CurrencyInputPanel from 'app/components/CurrencyInputPanel';
import { Divider } from 'app/components/Divider';
import { DefaultLayout } from 'app/components/Layout';
import { BoxPanel } from 'app/components/Panel';
import QuestionHelper from 'app/components/QuestionHelper';
import { Tab, Tabs, TabPanel } from 'app/components/Tab';
import { Currency } from 'types';

const StyledDL = styled.dl`
  margin: 15px 0 25px 0;
  text-align: center;

  > dd {
    margin-left: 0;
  }
`;

const SwapPanel = styled(Flex)`
  overflow: hidden;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const CURRENCYLIST = {
  icx: { symbol: 'ICX', decimals: 10, name: 'ICON' },
  baln: { symbol: 'BALN', decimals: 10, name: 'Blanced Token' },
  icd: { symbol: 'ICD', decimals: 10, name: 'ICON Dollars' },
};

export function TradePage() {
  const [value, setValue] = React.useState<number>(0);

  const handleTabClick = (event: React.MouseEvent, value: number) => {
    setValue(value);
  };

  const [swapInputAmount, setSwapInputAmount] = React.useState('0');

  const handleTypeInput = (val: string) => {
    setSwapInputAmount(val);
  };

  const [swapOutputAmount, setSwapOutputAmount] = React.useState('0');

  const handleTypeOutput = (val: string) => {
    setSwapOutputAmount(val);
  };

  const handleInputSelect = () => {};

  const inputCurrency: Currency = CURRENCYLIST['icx'];

  const outputCurrency: Currency = CURRENCYLIST['baln'];

  return (
    <DefaultLayout title="Trade">
      <Helmet>
        <title>Trade</title>
      </Helmet>

      <Box flex={1}>
        <Flex mb={50} flexDirection="column">
          <Flex>
            <Tabs value={value} onChange={handleTabClick}>
              <Tab>Swap</Tab>
              <Tab>Supply liquidity</Tab>
            </Tabs>
          </Flex>

          <TabPanel value={value} index={0}>
            <SwapPanel bg="bg2">
              <SwapPanel bg="bg3" p={35} flexDirection="column" alignItems="stretch" maxWidth={360} flex={1}>
                <Flex alignItems="center" justifyContent="space-between">
                  <Text as="h2" color="text" fontSize={25} fontWeight="bold">
                    Swap
                  </Text>
                  <Text color="text1" fontSize={14}>
                    Wallet: 72,273ICX
                  </Text>
                </Flex>

                <Flex mt={15} mb={25}>
                  <CurrencyInputPanel
                    value={swapInputAmount}
                    showMaxButton={false}
                    currency={inputCurrency}
                    onUserInput={handleTypeInput}
                    onCurrencySelect={handleInputSelect}
                    id="swap-currency-input"
                  />
                </Flex>

                <Flex alignItems="center" justifyContent="space-between">
                  <Text as="h2" color="text" fontSize={25} fontWeight="bold">
                    For
                  </Text>
                  <Text color="text1" fontSize={14}>
                    Wallet: 0 BALN
                  </Text>
                </Flex>

                <Flex mt={15} mb={25}>
                  <CurrencyInputPanel
                    value={swapOutputAmount}
                    showMaxButton={false}
                    currency={outputCurrency}
                    onUserInput={handleTypeOutput}
                    onCurrencySelect={handleInputSelect}
                    id="swap-currency-output"
                  />
                </Flex>

                <Divider style={{ marginBottom: 16 }} />

                <Flex alignItems="center" justifyContent="space-between">
                  <Text color="text1" fontSize={14}>
                    Minimum to receive
                  </Text>
                  <Text color="text1" fontSize={14}>
                    0 BALN
                  </Text>
                </Flex>

                <Flex alignItems="center" justifyContent="space-between">
                  <Text color="text1" fontSize={14} as="span">
                    Slippage tolerance
                    <QuestionHelper text="If the price slips by more than this amount, your swap will fail." />
                  </Text>
                  <Text color="text1" fontSize={14}>
                    2.5%
                  </Text>
                </Flex>

                <Flex justifyContent="center">
                  <Button color="primary" marginTop={25}>
                    Swap
                  </Button>
                </Flex>
              </SwapPanel>

              <Box bg="bg2" flex={1} padding={35}>
                <Text>Chart</Text>
              </Box>
            </SwapPanel>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <SwapPanel bg="bg2">
              <SwapPanel bg="bg3" p={35} flexDirection="column" alignItems="stretch" maxWidth={360} flex={1}>
                <Flex alignItems="flex-end">
                  <Text as="h2" color="text" fontSize={25} fontWeight="bold">
                    Supply:
                  </Text>
                  <Text color="text" fontSize={18}>
                    ICX / ICD
                  </Text>
                </Flex>

                <Flex mt={15}>
                  <CurrencyInputPanel
                    value="0"
                    showMaxButton={false}
                    currency={CURRENCYLIST['icx']}
                    onUserInput={handleTypeInput}
                    disableCurrencySelect={true}
                    id="supply-liquidity-input-tokena"
                  />
                </Flex>

                <Flex mt={15}>
                  <CurrencyInputPanel
                    value="0"
                    showMaxButton={false}
                    currency={CURRENCYLIST['icd']}
                    onUserInput={handleTypeInput}
                    disableCurrencySelect={true}
                    id="supply-liquidity-input-tokenb"
                  />
                </Flex>

                <Text mt={15} color="text1" fontSize={14} textAlign="right">
                  Wallet: 12,000 ICX / 1,485 ICD
                </Text>

                <Text mt={15} textAlign="center">
                  Need to add slider
                </Text>

                <Flex justifyContent="center">
                  <Button color="primary" marginTop={25}>
                    Supply
                  </Button>
                </Flex>
              </SwapPanel>

              <Box bg="bg2" flex={1} padding={35}>
                <Text as="h2" color="text" fontSize={20} fontWeight="bold" mb={10}>
                  ICX / ICD liquidity pool
                </Text>
                <Text as="p" color="text1" fontSize={14} mb={25} lineHeight="25px">
                  Earn Balance Tokens every day you supply liquidity. Your assets will be locked for the first 24 hours,
                  and your supply ratio will fluctuate with the price.
                </Text>

                <Flex>
                  <Box width={1 / 2} className="border-right">
                    <StyledDL>
                      <dt>Your supply</dt>
                      <dd>9,000 ICX / 2,160 ICD</dd>
                    </StyledDL>
                    <StyledDL>
                      <dt>Your daily rewards</dt>
                      <dd>~120 BALN</dd>
                    </StyledDL>
                  </Box>
                  <Box width={1 / 2}>
                    <StyledDL>
                      <dt>Total supply</dt>
                      <dd>500,000 ICX / 400,000 ICD</dd>
                    </StyledDL>
                    <StyledDL>
                      <dt>Total daily rewards</dt>
                      <dd>~17,500 BALN</dd>
                    </StyledDL>
                  </Box>
                </Flex>
              </Box>
            </SwapPanel>
          </TabPanel>
        </Flex>

        <BoxPanel bg="bg2" mb={50}>
          <Text as="h2" color="text" fontSize={25} fontWeight="bold" mb={25}>
            Liquidity details
          </Text>

          {/* <!-- Liquidity list --> */}
          <table className="list liquidity">
            <thead>
              <tr>
                <th>Pool</th>
                <th>Your supply</th>
                <th>Pool share</th>
                <th>Daily rewards</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {/* <!-- sICX / ICX --> */}
              <tr>
                <td>sICX / ICX</td>
                <td>15,000 ICX</td>
                <td>3.1%</td>
                <td>~ 120 BALN</td>
                <td>
                  <span className="dropdown">Withdraw</span>
                </td>
              </tr>

              {/* <!-- ICX / ICD --> */}
              <tr>
                <td>ICX / ICD</td>
                <td>
                  15,000 ICX
                  <br />
                  15,000 ICD
                </td>
                <td>3.1%</td>
                <td>~ 120 BALN</td>
                <td>
                  <span className="dropdown">Withdraw</span>
                </td>
              </tr>

              {/* <!-- BALN / ICD --> */}
              <tr>
                <td>BALN / ICD</td>
                <td>
                  15,000 BALN
                  <br />
                  15,000 ICD
                </td>
                <td>3.1%</td>
                <td>~ 120 BALN</td>
                <td>
                  <span className="dropdown">Withdraw</span>
                </td>
              </tr>
            </tbody>
          </table>
        </BoxPanel>
      </Box>
    </DefaultLayout>
  );
}
