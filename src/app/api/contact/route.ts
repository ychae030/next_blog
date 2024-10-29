import { sendEmail } from "@/service/email";
import { NextResponse } from "next/server";
import * as yup from "yup";

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  title: yup.string().required(),
  body: yup.string().required(),
});

export async function POST(request: Request) {
  // 요청 본문을 JSON으로 변환
  const requestBody = await request.json();

  // yup을 사용하여 JSON 형식을 검증
  const isValid = await bodySchema.isValid(requestBody);
  if (!isValid) {
    return NextResponse.json(
      { message: "유효하지 않은 포맷" },
      { status: 400 },
    );
  }

  try {
    const data = await sendEmail(requestBody);
    return NextResponse.json({
      message: "메일을 성공적으로 보냈습니다.",
      data,
    });
  } catch (error) {
    return NextResponse.json(
      { message: `${error} 오류가 발생했습니다` },
      { status: 500 },
    );
  }
}
