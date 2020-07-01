import React from "react"
import { Container, Row, Col, Button, Alert, Card } from "react-bootstrap"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

const InternationalStudents = (props) => (
  <Container className="mb-5">
    <Row>
      <Col md={7}>
        <Fade left>
          <h2 className="display-5 text-uppercase">
            International Student Policies
          </h2>
        </Fade>
        <h3>American-Earned Credits </h3>
        <p>
          International students with college-level learning assessed from
          another country must complete at least 30 additional U.S. college
          credits and meet all the area of study or concentration degree
          requirements to obtain a College of Biomedical Equipment Technology
          (CBET) associate degree. CBET does not accept international trade
          school or other forms of certification as transfer credit to
          certificate or degree producing programs. All other conditions that
          apply to local students will apply to international students as well.
        </p>
        <Img
          className="mb-3 rounded"
          fluid={props.images.intlpic1.childImageSharp.fluid}
          style={{ maxWidth: "600px" }}
        />
        <h3>Eligibility</h3>
        <p>
          Foreign citizens are defined as those who live and have citizenship in
          countries where English is not the native language. Foreign applicants
          interested in becoming undergraduate students will be eligible for
          enrollment if they can provide scores from either the TOEFL (Test of
          English as a Foreign Language) or IELTS (International English
          Language Testing System); and achieve a score of 17 or greater on the
          Wonderlic Exam.
        </p>
        <p>
          At minimum, TOEFL scores should be 500 on the paper examination, 173
          on the computer-based or 79 on the Internet-based test. At minimum,
          the IELTS score should be 6.5. Students are responsible for taking
          either the TOEFL or IELTS and having the official scores sent to CBET
          at 11550 IH-10 West, Suite 190, San Antonio, Texas 78230
        </p>
        <a href="http://www.ets.org/toefl">
          <Button className="mb-3">Learn More about TOEFL</Button>
        </a>
        <br />
        <a href="https://www.ielts.org/">
          <Button>Learn More about IELTS</Button>
        </a>
        <Alert variant="p-3 mb-4 mt-2 bg-warning text-dark">
          <p>
            The College of Biomedical Equipment Technology does not issue visas
            and has no residential campus facilities.
          </p>
          <p>
            Non-United States citizens who are residing outside the United
            States should be aware of the limitations and restrictions on
            services available to students.
          </p>
        </Alert>
        <h3>Apostille Certifications</h3>
        <p>
          An Apostille is a form of authentication appropriate to countries,
          which have signed the 1961 Hague Convention Abolishing the Requirement
          of Legalization for Foreign Public Documents.
        </p>
        <Img
          className="mb-3 rounded"
          fluid={props.images.intlpic2.childImageSharp.fluid}
          style={{ maxWidth: "600px" }}
        />
        <p>
          The College of Biomedical Equipment Technology will honor requests for
          Apostille certifications. Upon your written request, the College will
          provide the required documents for you to send to the State of Texas
          Department of the Treasury, Division of Revenue and Enterprise
          Services to complete the Apostille Certification process.
        </p>
        <p>
          To begin the process, please send signed written requests for an
          Apostille to:
        </p>

        <address>
          <b>Attn: Apostille Request</b> <br />
          Office of the Registrar College of Biomedical Equipment Technology
          <br />
          11550 IH 10 West, Suite 190 <br />
          San Antonio, TX 78230
        </address>

        <Alert className="p-3 mb-2 bg-secondary text-white">
          <p>Requests must include the following:</p>
          <ul>
            <li>
              The student’s contact information (including name, mailing
              address, telephone number and email address).
            </li>
            <li>
              The document being requested – official transcript $15.00 fee,
              duplicate diploma $35.00 fee, letter certifying graduation – no
              fee
            </li>
            <li>
              An international money order or personal check (drawn from a
              United States bank) payable to “College of Biomedical Equipment
              Technology” for the amount of the requested document
            </li>
            <li>
              A self-addressed return envelope so that the documents may be
              returned directly to the student once they have been processed by
              College of Biomedical Equipment Technology. Express shipping fees
              are $100.
            </li>
          </ul>
        </Alert>
        <p>
          The student will then need to submit all required documents and fees
          to the State of Texas Department of the Secretary of State, Business
          and Enterprise Services.{" "}
          <a href="https://www.sos.state.tx.us/authinfo.shtml">
            Please visit the State of Texas website
          </a>{" "}
          for more information about what is required by the State of Texas to
          process the apostille request.
        </p>
        <a href="mailto:admissiondept@cbet.edu">
          <Button>Contact Us</Button>
        </a>
        <h3>International Credit Policy for Testing</h3>
        <p>
          International students residing outside the United States will be
          permitted to attempt to earn credit through testing. United States and
          international citizens living abroad (both enrolled and non-enrolled)
          may request approval to register for TECEP® examinations. Such
          approval will ordinarily be based on the student’s ability to arrange
          an administration that makes use of examination sites approved by
          College of Biomedical Equipment Technology. All tests must be
          proctored by a full-time faculty member or an academic dean at an
          approved American university abroad, or with an approved DSST/DANTES,
          CLEP or TOEFL test administrator at an official DSST/DANTES, CLEP or
          TOEFL test site. Students requesting approval must also submit a
          minimum score of 500 on the paper examination, 173 on the
          computer-based or 79 on the Internet-based Test of English as a
          Foreign Language (TOEFL) prior to registering for the examination if
          English is not the official language of their country of citizenship.
          Students may also submit a minimum score of 6.5 on the IELTS
          (International English Language System) examination. Students must
          also garner a score of 14 or greater on the Wonderlic English
          Proficiency Examination. Students are responsible for all mailing
          costs and proctoring fees. College of Biomedical Equipment Technology
          reserves the right to approve the proctoring arrangement.
        </p>
        <h3>International Credit Policy for Online Courses</h3>
        <p>
          American citizens and international students residing outside of the
          continental United States are restricted to enrolling in online
          courses. Prior to registering, students must first secure special
          approval. Such approval is usually based on the student’s ability and
          willingness to absorb additional costs associated with meeting the AAS
          externship requirements.
        </p>
        <Img
          className="mb-3 rounded"
          fluid={props.images.intlpic3.childImageSharp.fluid}
          style={{ maxWidth: "600px" }}
        />
        <p>
          All externships must be administered by an approved healthcare
          organization. Prior to registering for an online program, students
          living outside the United States must contact the school director to
          have an externship site approved.
        </p>
        <p>
          Students are responsible for all mailing or other transport costs and
          proctoring fees. United States military personnel are authorized to
          participate in externships through the healthcare facilities based on
          the approval of the officers in charge at authorized sites.
        </p>
        <h3>International Credit Policy for Transfer Credit</h3>
        <p>
          College of Biomedical Equipment Technology does not participate in the
          Student and Exchange Visitor Information System (SEVIS). Therefore,
          the College does not sponsor foreign national students for F-1 or J-1
          visa status.
        </p>
        <h3>International Credit Evaluations</h3>
        <p>
          College of Biomedical Equipment Technology will not evaluate
          transcripts from other countries. We will accept the credit
          recommendations from one of the following agencies when the
          recommendations are based on a course by course evaluation and sent on
          an official transcript to the College.
        </p>
        <ul>
          <li>Academic Credentials Evaluation Institute, Inc. (ACEI)</li>
          <li>Center for Applied Research, Evaluations & Education, Inc.</li>
          <li>Educational Credential Evaluators, Inc. (ECE)</li>
          <li>World Educational Services, Inc. (WES)</li>
          <li>SDR Educational Consultants</li>
          <li>SpanTran Evaluation Services</li>
          <li>Transcript Research</li>
        </ul>
        <p>
          All costs associated with the international credit evaluation are the
          responsibility of the student. The College reserves the right to make
          its own determination on the amount and type of credit to be awarded
          based on the evaluations provide by these agencies. There will be no
          mixing or matching of evaluations. The College does not issue
          “Certificates of Acceptance” (Form I-20) to international students.
          Students who enter the United States on a student visa (F-1) through
          another college or university may enroll in College of Biomedical
          Equipment Technology. However, it will be the student’s responsibility
          to keep his/her visa status current to be eligible for the continued
          pursuit of a College of Biomedical Equipment Technology certificate or
          degree.
        </p>
        <h3>Application and Enrollment for International Students</h3>
        <p>
          To apply to College of Biomedical Equipment Technology, submit the
          following documents:
        </p>
        <ol>
          <li>
            a completed College of Biomedical Equipment Technology Application
            Form
          </li>
          <li>application fee (payment must be in U.S. dollars)</li>
          <li>
            a TOEFL or IELTS score report sent directly to the College from the
            Educational Testing Service
          </li>
        </ol>
        <p>
          Upon receipt of approval to apply students may then complete the
          enrollment process outlined in the catalog.
        </p>
        <Img
          className="mb-3 rounded"
          fluid={props.images.intlpic4.childImageSharp.fluid}
          style={{ maxWidth: "600px" }}
        />
      </Col>
      <Col md={4}>
        <Card>
          <Img
            fluid={props.images.emmanuel.childImageSharp.fluid}
            style={{ maxWidth: "348px" }}
          />
          <Card.Body>
            <Card.Title>Emmanuel Enyi</Card.Title>
            <Card.Text
              className="font-weight-light"
              style={{ lineHeight: "20px" }}
            >
              My experience in the College of Biomedical Equipment Technology,
              has been absolutely incredible. I‘ve been constantly amazed by the
              kindness, familial mutuality, and camaraderie that I‘ve
              encountered so far. I‘ve had the pleasure of meeting and learning
              from great mentors, working with great scholars. Studying in CBET
              is for me a dream come true, because it gives me a perfect
              opportunity to learn what I exactly want to pursue. The lecturers
              are not only friendly but also with whopping industry experiences,
              so that we can learn from their amazing experiences. The staff
              members also care about the future career of students. good
              relationship with co students, flexible nature of programme and
              the ability to study when and where it suits me, all online! The
              teaching is great and course structure is nice and easy to follow.
              I would recommend CBET to anyone who wants to study and work at
              the same time."
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
)

export default InternationalStudents
