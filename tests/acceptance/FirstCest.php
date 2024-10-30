<?php

class FirstCest
{
    public function coursePageShowsTitle(AcceptanceTester $I)
    {
        $I->amOnPage('/kurse');
        $I->see('Snowboarding 101');
        $I->click('Snowboarding 101');
        $I->see('S101');
    }
}
