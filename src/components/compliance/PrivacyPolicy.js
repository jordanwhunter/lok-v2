import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';

export default function PrivacyPolicy() {
  return (
    <Card>
      <Card.Body>
        <Card.Title style={{ textAlign: 'center' }}>
          <LockTwoToneIcon /> 
          <hr />
        </Card.Title>
        <Card.Subtitle style={{ textAlign: 'center' }}>
          <h3>Privacy Policy</h3>
        </Card.Subtitle>
        <Card.Text>
          <strong>Lok Privacy Policy</strong> 
          <br /><br />

          Effective: February 24, 2021
          <br /><br />

          Thanks for using Lok! Here we describe how we collect, use, and handle your personal data when you use our service (“<strong>Service</strong>”).
          <br /><br />

          <strong>What & Why</strong> 
          <br /><br />

          We collect and use the following information to provide, improve, protect, and promote our Service.
          <br /><br />

          <i>Account information</i>. We collect, and associate with your account, the email address you provide when you sign up for your account.
          <br /><br />

          <i>Your Things</i>. Our service is designed as a simple and personalized way for you to store your files, documents, photos, comments, messages and so on ("<strong>Your Things</strong>"). To make that possible, we store, process, and transmit Your Things as well as information related to it. This related information includes your <Link to='/update-profile' target='_blank'>profile information</Link> that makes it easier to collaborate and share Your Stuff with others, as well as things like the size of the file, the time it was uploaded, collaborators, and usage activity.
          <br /><br />

          <i>Usage information</i>. We collect information related to how you use the Service, including actions you take in your account (like viewing, creating and moving files or folders). We use this information to provide, improve, and promote our Service, and protect Lok users.
          <br /><br />

          <i>Device information</i>. We also collect information from and about the devices you use to access the Service. This includes things like IP addresses, the type of browser and device you use, the web page you visited before coming to our site, and identifiers associated with your devices. Your devices (depending on their settings) may also transmit location information to the Service. For example, we use device information to detect abuse and identify and troubleshoot bugs.
          <br /><br />

          <i>Cookies and other technologies</i>. We use technologies like cookies and pixel tags to provide, improve, protect, and promote our Service. For example, cookies help us with things like remembering your username for your next visit, understanding how you are interacting with our Service, and improving them based on that information. You can set your browser to not accept cookies, but this may limit your ability to use the Service. We may also use third-party service providers that set cookies and similar technologies to promote Lok services.
          <br /><br />

          <i>Bases for processing your data</i>. We collect and use the personal data described above in order to provide you with the Service in a reliable and secure manner. We also collect and use personal data for our legitimate needs. To the extent we process your personal data for other purposes, we ask for your consent in advance or require that our partners obtain such consent.
          <br /><br />

          <strong>With Whom</strong>
          <br /><br />

          We may share information as discussed below, but we won’t sell it to advertisers or other third parties.
          <br /><br />

          <i>Others working for and with Lok</i>. Lok currently does not use third parties (for example, providers of customer support and IT services) for the business purposes of helping us provide, improve, protect, and promote our Service. However, we reserve the right to start at any time. These third parties would access your information to perform tasks on our behalf, and we’ll remain responsible for their handling of your information per our instructions.
          <br /><br />

          <i>Other Lok Companies</i>. Lok currently does not share infrastructure, systems, and technology with other Lok Companies to provide, improve, protect, and promote Lok Company Services. However, we reserve the right to start at any time. Your information would then be processed across the Lok Companies for these purposes, as permitted by applicable law and in accordance with their terms and policies.
          <br /><br />

          <i>Other users</i>. Our Service displays information like your email address and usage information to other users you collaborate or choose to share with. When you register your Lok account with an email address on a domain owned by your employer or organization, we may help collaborators and administrators find you and your team by making some of your basic information—like your name, team name, and email address—visible to other users on the same domain. This helps you sync up with teams you can join and helps other users share files and folders with you.
          <br /><br />

          Certain features let you make additional information available to others.
          <br /><br />

          <i>Other applications</i>. If in the event of third-party service integration--for example via <a href='https://www.firebase.com' target='_blank' rel='noreferrer'>Firebase</a>. By doing so, you’re enabling Lok and those third parties to exchange information about you and data in your account so that Lok and those third parties can provide, improve, protect, and promote their services. Please remember that third parties’ use of your information will be governed by their own privacy policies and terms of service.
          <br /><br />

          <i>Law & Order and the Public Interest</i>. We may disclose your information to third parties if we determine that such disclosure is reasonably necessary to:
        </Card.Text>

        <ListGroup variant='flush'>
          <ListGroup.Item>(a) comply with any applicable law, regulation, legal process, or appropriate government request;</ListGroup.Item>
          <ListGroup.Item>(b) protect any person from death or serious bodily injury;</ListGroup.Item>
          <ListGroup.Item>(c) prevent fraud or abuse of Lok or our users;</ListGroup.Item>
          <ListGroup.Item>(d) protect Lok’s rights, property, safety, or interest; or</ListGroup.Item>
          <ListGroup.Item>(e) perform a task carried out in the public interest.</ListGroup.Item>
        </ListGroup>
        <br />
        
        <Card.Text>
          Stewardship of your data is critical to us and a responsibility that we embrace. We believe that your data should receive the same legal protections regardless of whether it’s stored on our Service or on your home computer’s hard drive. We’ll abide by the following Government Request Principles when receiving, scrutinizing, and responding to government requests (including national security requests) for your data:
        </Card.Text>

        <ListGroup variant='flush'>
          <ListGroup.Item></ListGroup.Item>
          <ListGroup.Item></ListGroup.Item>
          <ListGroup.Item></ListGroup.Item>
        </ListGroup>
        <br /><br />

        

        <ListGroup variant='flush'>
          <ListGroup.Item>(a) you’re in material breach of these Terms,</ListGroup.Item>
          <ListGroup.Item>(b) doing so would cause us legal liability or compromise our ability to provide the Service to our other users, or</ListGroup.Item>
          <ListGroup.Item>(c) we're prohibited from doing so by law.</ListGroup.Item>
        </ListGroup>
        <br />

        <Card.Text>
          <strong>Discontinuation of Service</strong>
          <br /><br />

          Due to Lok being a free service, we may decide at any time to discontinue the Service (entirely or specifically to a user) in response to unforeseen circumstances beyond our control, or to comply with a legal requirement. Lok is not responsible for data lost in any capacity due to this.
          <br /><br />

          <strong>Service “AS IS”</strong>
          <br /><br />

          We strive to provide a great Service, but there are certain things that we can't guarantee. TO THE FULLEST EXTENT PERMITTED BY LAW, LOK MAKES NO WARRANTIES, EITHER EXPRESS OR IMPLIED, ABOUT THE SERVICE. THE SERVICE IS PROVIDED "AS IS." WE ALSO DISCLAIM ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. Some places don’t allow the disclaimers in this paragraph, so they may not apply to you.
          <br /><br />

          <strong>Limitation of Liability</strong>
          <br /><br />

          WE DON’T EXCLUDE OR LIMIT OUR LIABILITY TO YOU WHERE IT WOULD BE ILLEGAL TO DO SO—THIS INCLUDES ANY LIABILITY FOR LOK’S FRAUD OR FRAUDULENT MISREPRESENTATION IN PROVIDING THE SERVICE. IN COUNTRIES WHERE THE FOLLOWING TYPES OF EXCLUSIONS AREN’T ALLOWED, WE'RE RESPONSIBLE TO YOU ONLY FOR LOSSES AND DAMAGES THAT ARE A REASONABLY FORESEEABLE RESULT OF OUR FAILURE TO USE REASONABLE CARE AND SKILL OR OUR BREACH OF OUR CONTRACT WITH YOU. THIS PARAGRAPH DOESN’T AFFECT CONSUMER RIGHTS THAT CAN'T BE WAIVED OR LIMITED BY ANY CONTRACT OR AGREEMENT.
          <br /><br />
          IN COUNTRIES WHERE EXCLUSIONS OR LIMITATIONS OF LIABILITY ARE ALLOWED, LOK WON’T BE LIABLE FOR:
        </Card.Text>

        <ListGroup variant='flush'>
          <ListGroup.Item>i. ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, EXEMPLARY, OR CONSEQUENTIAL DAMAGES, OR</ListGroup.Item>
          <ListGroup.Item>ii. ANY LOSS OF USE, DATA, BUSINESS, OR PROFITS, REGARDLESS OF LEGAL THEORY.</ListGroup.Item>
        </ListGroup>
        <br />

        <Card.Text>
          THESE EXCLUSIONS OR LIMITATIONS WILL APPLY REGARDLESS OF WHETHER OR NOT LOK OR ANY OF ITS AFFILIATES HAS BEEN WARNED OF THE POSSIBILITY OF SUCH DAMAGES.

          IF YOU USE THE SERVICE FOR ANY COMMERCIAL, BUSINESS, OR RE-SALE PURPOSE, LOK, ITS AFFILIATES, SUPPLIERS OR DISTRIBUTORS WILL HAVE NO LIABILITY TO YOU FOR ANY LOSS OF PROFIT, LOSS OF BUSINESS, BUSINESS INTERRUPTION, OR LOSS OF BUSINESS OPPORTUNITY. LOK AND ITS AFFILIATES AREN’T RESPONSIBLE FOR THE CONDUCT, WHETHER ONLINE OR OFFLINE, OF ANY USER OF THE SERVICE.

          OTHER THAN FOR THE TYPES OF LIABILITY WE CANNOT LIMIT BY LAW (AS DESCRIBED IN THIS SECTION), WE LIMIT OUR LIABILITY TO YOU TO THE GREATER OF $0 USD.
          <br /><br />

          <strong>Resolving Disputes</strong>
          <br /><br />

          As Lok is a free service that you must opt into, with no forms of advertisement or pay-to-use features, we do not entertain anything in the form of legal case filings in lieu of the Service provided. 
          <br /><br />

          <strong>IF YOU'RE A U.S. RESIDENT, YOU ALSO AGREE TO THE FOLLOWING MANDATORY ARBITRATION/MEDIATION PROVISIONS:</strong>
        </Card.Text>

        <ListGroup variant='flush'>
          <ListGroup.Item>- There will be no private arbitration or public mediation to handle any disputes related to Lok or its Service. Lok holds no responsibility for anything, and you agree to that by using the Service.</ListGroup.Item>
          <ListGroup.Item>- <strong>NO CLASS ACTIONS</strong>. You may not not bring a claim as a plaintiff or a class member in a class, consolidated, or representative action. Class arbitrations, class actions, private attorney general actions, and consolidation with other arbitrations aren’t allowed.</ListGroup.Item>
        </ListGroup>
        <br />

        <Card.Text>
          <strong>Controlling Law</strong>
          <br /><br />

          These Terms will be governed by U.S. law except for its conflicts of laws principles. However, some countries (including those in the European Union) have laws that require agreements to be governed by the local laws of the consumer's country. This paragraph doesn’t override those laws.
          <br /><br />

          <strong>Entire Agreement</strong>
          <br /><br />

          These Terms constitute the entire agreement between you and Lok with respect to the subject matter of these Terms, and supersede and replace any other prior or contemporaneous agreements, or terms and conditions applicable to the subject matter of these Terms. These Terms create no third party beneficiary rights.
          <br /><br />

          <strong>Waiver, Severability & Assignment</strong>
          <br /><br />

          Lok’s failure to enforce a provision is not a waiver of its right to do so later. If a provision is found unenforceable, the remaining provisions of the Terms will remain in full effect and an enforceable term will be substituted reflecting our intent as closely as possible. You may not assign any of your rights under these Terms, and any such attempt will be void. Lok may assign its rights to any of its affiliates or subsidiaries, or to any successor in interest of any business associated with the Services.
          <br /><br />

          <strong>Modifications</strong>
          <br /><br />

          We may revise these Terms from time to time to better reflect:
        </Card.Text>

        <ListGroup variant='flush'>
          <ListGroup.Item>(a) changes to the law,</ListGroup.Item>
          <ListGroup.Item>(b) new regulatory requirements, or</ListGroup.Item>
          <ListGroup.Item>(c) improvements or enhancements made to our Service.</ListGroup.Item>
        </ListGroup>
        <br />

        <Card.Text>
          If an update affects your use of the Service, we still reserve the right to withhold notification from you prior to the update's effective date.
          <br /><br />
          If you don’t agree to the updates we make, please cancel your account. By continuing to use or access the Service after the updates come into effect, you agree to be bound by the revised Terms.
        </Card.Text>
      </Card.Body>
    </Card>
  )
};