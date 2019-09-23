const {Selector} = require('testcafe');

fixture `Example Fixture`
    .page `../static/index.html`;

test('Table Test', async t => {
    const tableSelector = Selector(".clsEmpTable").nth(1);
    console.log(await tableSelector.count);
    const rowSelector = tableSelector.find("tr");
    const rowCount = await rowSelector.count;
    console.log(`rowCount - ${rowCount}`);

    for (var i = 0; i < rowCount; i++) {
        const childSelector = rowSelector.nth(i).child();
        const childCount = await childSelector.count;

        console.log(`row-${i} child-${childCount}`);
        console.log(`${await childSelector.nth(0).textContent} - ${await childSelector.nth(1).textContent} - ${await childSelector.nth(2).textContent}`);
    }
});