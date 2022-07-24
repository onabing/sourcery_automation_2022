// @ts-check
const { test, expect } = require('@playwright/test');

const data = [
  'Prototype',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9'
]


data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding empty fields results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be 0').toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Subtract', () => {
    test('Subtracting empty fields results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be 0').toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiplying empty fields results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be 0').toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Dividing empty fields results in error message', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();

      await expect(page.locator('#errorMsgField'), 'Should display error message').toContainText('Divide by zero error!');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Concatenate', () => {
    test('Concatenating empty fields results in empty answer field', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('');
      await page.locator('#number2Field').type('');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer field should be empty').toHaveValue('');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiplying 4 by 0 results in 0', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('4');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be 0').toHaveValue('0');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Concatenate', () => {
    test('Concatenating aaa and ??? results in aaa???', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('aaa');
      await page.locator('#number2Field').type('???');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be concatenated symbols').toHaveValue('aaa???');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Marking "Integers only" checkbox should result answer in integers', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.5');
      await page.locator('#number2Field').type('2.6');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});

      let integerSelectButton = page.locator('#integerSelect');
      await expect(integerSelectButton).toBeEnabled();
      await expect(integerSelectButton).toBeVisible();
      await integerSelectButton.check();

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be in integers').toHaveValue('5');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Unmarking "Integers only" checkbox should result answer in real number', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2.5');
      await page.locator('#number2Field').type('2.6');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});

      let integerSelectButton = page.locator('#integerSelect');
      await expect(integerSelectButton).toBeEnabled();
      await expect(integerSelectButton).toBeVisible();
      await integerSelectButton.uncheck();

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be in real number').toHaveValue('5.1');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Clicking on "Clear" button should result in empty answer field', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();

      page.locator("#numberAnswerField");
  
      await expect(page.locator('#numberAnswerField')).toBeTruthy();
      await page.click('#clearButton');
      await expect(page.locator('#numberAnswerField'), 'Answer field should be empty').toHaveValue('');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding 9999999999 and 9999999999 should result in 19999999998', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('9999999999');
      await page.locator('#number2Field').type('9999999999');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be 19999999998').toHaveValue('19999999998');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiplying 9999999999 and 9999999999 should result in 99999999980000000000', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('9999999999');
      await page.locator('#number2Field').type('9999999999');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be 99999999980000000000').toHaveValue('99999999980000000000');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Adding', () => {
    test('Adding -1 and -2 should result in -3', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-1');
      await page.locator('#number2Field').type('-2');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be -3').toHaveValue('-3');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Subtract', () => {
    test('Subtracting -2 from -6 should result in -4', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6');
      await page.locator('#number2Field').type('-2');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be -4').toHaveValue('-4');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiplying -1 and -2 should result in 2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-1');
      await page.locator('#number2Field').type('-2');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be 2').toHaveValue('2');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Dividing -6 and -2 should result in 3', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-6');
      await page.locator('#number2Field').type('-2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be 3').toHaveValue('3');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Concatenate', () => {
    test('Concatenating -1 and -2 should result in -1-2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-1');
      await page.locator('#number2Field').type('-2');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be -1-2').toHaveValue('-1-2');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Dividing by 0 results in error message', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('4');
      await page.locator('#number2Field').type('0');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();

      await expect(page.locator('#errorMsgField'), 'Error message should be displayed').toContainText('Divide by zero error!');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding ? and a results in error message', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('?');
      await page.locator('#number2Field').type('a');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();

      await expect(page.locator('#errorMsgField'), 'Error message should be displayed').toContainText('Number 1 is not a number');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding 1 and a results in error message', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('1');
      await page.locator('#number2Field').type('a');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();

      await expect(page.locator('#errorMsgField'), 'Error message should be displayed').toContainText('Number 2 is not a number');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiplying -1 and 2 results in -2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-1');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be -2').toHaveValue('-2');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Dividing -4 and 2 results in -2', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('-4');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be -2').toHaveValue('-2');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Add', () => {
    test('Adding 2 and 3 results in 5', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Add'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be 5').toHaveValue('5');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Subtract', () => {
    test('Subtracting 2 from 6 results in 4', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Subtract'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be 4').toHaveValue('4');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Multiply', () => {
    test('Multiplying 2 and 3 results in 6', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('3');
      await page.selectOption('#selectOperationDropdown', {label: 'Multiply'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be 6').toHaveValue('6');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Divide', () => {
    test('Dividing 6 from 2 results in 3', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('6');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Divide'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be 3').toHaveValue('3');
    });
  });
});

data.forEach(version => {
  test.describe(version + ': Concatenate', () => {
    test('Concatenating 2 and 2 results in 22', async ({ page }) => {
      await page.goto('https://testsheepnz.github.io/BasicCalculator');
      await page.selectOption('#selectBuild', { label: version});
      await page.locator('#number1Field').type('2');
      await page.locator('#number2Field').type('2');
      await page.selectOption('#selectOperationDropdown', {label: 'Concatenate'});

      let calculateButton = page.locator('#calculateButton');
      await expect(calculateButton).toBeEnabled();
      await expect(calculateButton).toBeVisible();

      await calculateButton.click();
  
      await expect(page.locator('#numberAnswerField'), 'Answer should be 22').toHaveValue('22');
    });
  });
});