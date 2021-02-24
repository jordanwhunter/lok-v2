import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

export default function AcceptableUse() {
  return (
    <Card>
      <Card.Body>
        <Card.Title style={{ textAlign: 'center' }}>
          <LockTwoToneIcon /> 
          <hr />
        </Card.Title>
        <Card.Subtitle style={{ textAlign: 'center' }}>
          <h3>Acceptable Use Policy</h3>
        </Card.Subtitle>
        <Card.Text>
          <strong>Lok Acceptable Use Policy</strong> 
          <br /><br />

          We trust you to use our Service responsibly. 
          <br /><br />
          You agree not to misuse the Lok service ("<strong>Service</strong>") or help anyone else to do so. For example, you must not even try to do any of the following in connection with the Service:
        </Card.Text>

        <ListGroup variant='flush'>
          <ListGroup.Item>• probe, scan, or test the vulnerability of any system or network;</ListGroup.Item>
          <ListGroup.Item>• breach or otherwise circumvent any security or authentication measures;</ListGroup.Item>
          <ListGroup.Item>• access, tamper with, or use non-public areas or parts of the Service, or shared areas of the Service you haven't been invited to;</ListGroup.Item>
          <ListGroup.Item>• interfere with or disrupt any user, host, or network, for example by sending a virus, overloading, flooding, spamming, or mail-bombing any part of the Service;</ListGroup.Item>
          <ListGroup.Item>• access, search, or create accounts for the Service by any means other than our publicly supported interfaces (for example, "scraping" or creating accounts in bulk);</ListGroup.Item>
          <ListGroup.Item>• send unsolicited communications, promotions or advertisements, or spam;</ListGroup.Item>
          <ListGroup.Item>• send altered, deceptive or false source-identifying information, including "spoofing" or "phishing";</ListGroup.Item>
          <ListGroup.Item>• promote or advertise products or services other than your own without appropriate authorization;</ListGroup.Item>
          <ListGroup.Item>• abuse referrals or promotions to get more storage space than deserved or to sell storage space received from referrals or promotions;</ListGroup.Item>
          <ListGroup.Item>• circumvent storage space limits;</ListGroup.Item>
          <ListGroup.Item>• sell the Service unless specifically authorized to do so;</ListGroup.Item>
          <ListGroup.Item>• publish or share materials that are unlawfully pornographic or indecent, or that contain extreme acts of violence or terrorist activity, including terror propaganda;</ListGroup.Item>
          <ListGroup.Item>• advocate bigotry or hatred against any person or group of people based on their race, religion, ethnicity, sex, gender identity, sexual orientation, disability, or impairment;</ListGroup.Item>
          <ListGroup.Item>• harass or abuse Lok personnel or representatives or agents performing services on behalf of Lok;</ListGroup.Item>
          <ListGroup.Item>• violate the law in any way, including storing, publishing or sharing material that's fraudulent, defamatory, or misleading; or</ListGroup.Item>
          <ListGroup.Item>• violate the privacy or infringe the rights of others.</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  )
};