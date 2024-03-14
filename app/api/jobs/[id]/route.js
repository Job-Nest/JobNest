import connectMongoDB from '@/libs/mongodb';
import Job from '@/models/jobs';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  const { id } = params;
  const { newDate: date, newTitle: title, newCompanyName: company_name, newLastAction: last_action, newSource: source, newAppUrl: app_url} =
    await request.json();
  await connectMongoDB();
  await Job.findByIdAndUpdate(id, { title, company_name, last_action, source, app_url });
  return NextResponse.json({ message: 'Job updated' }, { status: 200 });
}
